const express = require("express");
const userCltr = require("../app/controllers/userCltr");
const studentCltr = require("../app/controllers/studentCltr");
const studyCenterCltr = require("../app/controllers/studyCenterCltr");
const bookingCltr = require("../app/controllers/bookingCltr");
const paymentCltr = require("../app/controllers/paymentCltr");
const { authenticateUser } = require("../app/middlewares/authentication");
const router = express.Router();

// apis

router.post("/api/register", userCltr.register);
router.post("/api/users/login", userCltr.login);
router.get("/api/users/account", authenticateUser, userCltr.account);

router.post("/api/student", studentCltr.create);
router.post("/api/study-center", studyCenterCltr.create);
router.post("/api/booking", bookingCltr.create);
router.post("/api/payment", paymentCltr.create);

module.exports = router;
