const Payment = require("../models/payment");

const paymentCltr = {};

paymentCltr.create = (req, res) => {
  const body = req.body;
  const payment = new Payment(body)
    .then(payment => {
      res.json(payment);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports = paymentCltr;
