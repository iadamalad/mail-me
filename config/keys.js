//keys.js - figure out what set of credentials to use
if (process.env.NODE_ENV === "production") {
  //we are in production
  module.exports = require("./prod"); //common js module characterized by require statements, common js modules can have some sort of code before requiring
} else {
  //we are in developement - return dev keys
  module.exports = require("./dev");
}
