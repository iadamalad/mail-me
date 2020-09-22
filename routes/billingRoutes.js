const keys = require("../config/keys"); //gives the proper keys depending if in production development
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = function (app) {
  app.post("/api/stripe", (req, res) => {
    console.log("The response is " + req.body);
  });
};
