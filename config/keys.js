//keys.js - figure out what set of credentials to use
if (process.env.NODE_ENV === "production") {
  //we are in production
  module.exports("./prod");
} else {
  //we are in developement - return dev keys
  module.exports = require("./dev");
}
