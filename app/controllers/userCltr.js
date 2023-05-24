const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userCltr = {};

userCltr.register = (req, res) => {
  const body = req.body;
  const user = new User(body);

  user
    .save()
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.json(err);
    });
};

// SKINNY CONTROLLER & FAT MODELS(ALL LOGIC)
//LOGIN
userCltr.login = (req, res) => {
  const body = req.body;

  // find the user based on his email //user or null
  User.findOne({ email: body.email }).then(user => {
    if (!user) {
      res.json("invalid email or password");
    }

    // compare password with encrypted pwd //boolean
    bcrypt
      .compare(body.password, user.password)
      .then(match => {
        if (match) {
          // generate token
          const tokenData = {
            _id: user._id,
            username: user.username,
            email: user.email,
          };

          const token = jwt.sign(tokenData, process.env["JWT_SECRET"], {
            expiresIn: "2d",
          });
          res.json({
            token: `Bearer ${token}`,
          });
        } else {
          res.json("invalid email or password");
        }
      })
      .catch(err => {
        res.json(err);
      });
  });
};

userCltr.account = (req, res) => {
  User.findOne({ _id: req.userId })
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports = userCltr;
