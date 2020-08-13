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
    (accessToken, refreshToken, profile, done) => {
      //callback when users comes back from being authorized by google
      User.findOne({ googleID: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser); //the done function communicates back to passport that we are done with no errors(null) and with the user
        } else {
          new User({
            googleID: profile.id,
          })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
