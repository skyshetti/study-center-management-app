const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  seatId: {
    type: Schema.Types.ObjectId,
    ref: "StudyCenter",
  },
  studyCenterId: {
    type: Schema.Types.ObjectId,
    ref: "StudyCenter",
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
