const express = require("express");
const app = express();
const path = require("path");
const menu = require("../config");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let takeOrder = async () => {
  return new Promise((done) => {
    console.log("Order taken!");
    done();
  });
};

let createPrettyPatty = async (menu) => {
  return new Promise((done) => {
    console.log(`1 ${menu} pretty patty ready!`);
    done();
  });
};

app.get("/", async (req, res) => {
  takeOrder();
  await createPrettyPatty("Green");
  res.render("index", { menu });
});

module.exports = app;
