const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
const pwd = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 18,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // custom validations
      validate: {
        validator: function (value) {
          return validator.isEmail(value);
        },
        message: function () {
          return "Invalid email format";
        },
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 128,
      validate: {
        validator: function (value) {
          return pwd.test(value);
        },
        message: function () {
          return "passwords must contain at least one uppercase letter, one number, and one special character";
        },
      },
    },
    role: {
      type: String,
      enum: ["admin", "student", "front-office"],
      default: "student",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  bcrypt.genSalt().then(salt => {
    bcrypt.hash(this.password, salt).then(encrypted => {
      this.password = encrypted;
      next();
    });
  });
});

const User = mongoose.model("User", userSchema);
module.exports = User;
