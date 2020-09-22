const passport = require("passport");
module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"], //scope specifies to google server what access we want from this user
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"), //passport middle does it's thing then passes the request on to the next handler
    (req, res) => {
      res.redirect("/surveys");
    }
  ); //with this callback,the url will have the user token

  app.get("/api/logout", (req, res) => {
    //when a user makes a request here, inside the req object their is a function called logout
    req.logout(); //logout will take that user and get rid of credetinials
    //res.send(req.user); //sending back an empty user
    res.redirect("/");
  });
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
