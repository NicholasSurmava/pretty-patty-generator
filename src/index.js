const express = require("express");
const app = express();
const menu = require("../config");

let takeOrder = async () => {
  return new Promise((done) => {
    console.log("May I take your order?");
    menu.forEach((item) => {
      console.log(item);
    });
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
  res.json(menu);
});

module.exports = app;
