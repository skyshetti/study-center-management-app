const mongoose = require("mongoose");

const configureDb = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/u-auth-002")
    .then(() => {
      console.log("Db connected");
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = configureDb;
