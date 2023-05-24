const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seatsSchema = new Schema({
  seatNumber: {
    type: String,
    required: true,
  },
  floorNumber: {
    type: Number,
    required: true,
  },
  isAc: {
    type: Boolean,
    required: true,
  },
  isBooked: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const studyCenterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  totalSeats: {
    type: Number,
    required: true,
  },
  totalFloor: {
    type: Number,
    required: true,
  },
  seats: [seatsSchema],
  description: {
    type: String,
    required: true,
  },
  timings: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

const StudyCenter = mongoose.model("StudyCenter", studyCenterSchema);

module.exports = StudyCenter;
