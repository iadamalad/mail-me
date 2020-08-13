const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);
const app = new express(); //this is the express app which registers our routes

//set up middleware so every request that comes in uses them, don't have to do them for every request
app.use(
  //use wires middleware to our app, middleware are small function which can alter the request before sending out a response
  cookieSession({
    //this middleware extracts cookie data
    maxAge: 30 * 24 * 60 * 1000, //cookie will last for 30 days before expiring
    keys: [keys.cookieKey], //array in case we want more than one key to encry
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  //express is telling node to listen at port 5000
});
