const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
  },
  mobile: {
    type: String,
    minlength: 10,
    maxlength: 10,
    required: true,
  },
  education: {
    type: String,
    required: true,
    minlength: 5,
  },
  purpose: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  aadhar: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
