const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
const { Schema } = mongoose; //this is the same as the top, destructuring

const userSchema = new Schema({
  googleID: String,
});

mongoose.model("users", userSchema); //creating a mongoose model is like creating a colleciton, so we're creating a colleciton called users that satisfies the userschema
