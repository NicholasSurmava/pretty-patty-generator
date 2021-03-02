const express = require("express");
const app = express();
const path = require("path");
const menu = require("../config");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let takeOrder = async () => {
  return new Promise((done) => {
    console.log("May I take your order?");
    console.log("Order taken!");
    done();
  });
};

let createPrettyPatty = async (menu) => {
  return new Promise((done) => {
    setTimeout(() => {
      console.log(`1 ${menu} pretty patty ready!`);
      done();
    }, 2000);
  });
};

app.get("/", async (req, res) => {
  takeOrder();
  await createPrettyPatty("Green");
  res.render("index", { menu });
});

module.exports = app;
