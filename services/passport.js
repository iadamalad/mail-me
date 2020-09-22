const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys.js");

const User = mongoose.model("users"); //this pulls out the users collection out of our database (mongoose.model(1 argument) means we're trying to fetch something out of mongoose)
passport.serializeUser((user, done) => {
  done(null, user.id); //user.id is what we are going to use to identify users in future requests, it is not GoogleID but the record id on mongo
}); //user is what we pulled out of the database when we got existingUser or created a new one
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user); //done with null, no error and the user that we pulled out
  });
});
passport.use(
  new GoogleStrategy( //has internal identifier of 'google'
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      //callback when users comes back from being authorized by google
      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        done(null, existingUser); //the done function communicates back to passport that we are done with no errors(null) and with the user
        //can do return done(null, existingUser); and take out the else
      } else {
        const user = await new User({
          //anytime we touch our database, it returns a promise so we have to deal with asynchronously
          googleID: profile.id,
        }).save();
        done(null, user);
      }
    }
  )
);
