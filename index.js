const express = require("express");
const app = new express(); //this is the express app which registers our routes

//app.get means we are creating a new route handler
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  //express is telling node to listen at port 5000
  console.log("server is running!");
});
