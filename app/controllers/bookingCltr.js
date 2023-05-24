const Booking = require("../models/booking");

const bookingCltr = {};

bookingCltr.create = (req, res) => {
  const body = req.body;
  const booking = new Booking();
  booking
    .save()
    .then(booking => {
      res.json(booking);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports = bookingCltr;
