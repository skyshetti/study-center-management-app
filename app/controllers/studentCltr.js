const Student = require("../models/student");

const studentCltr = {};

studentCltr.create = (req, res) => {
  const body = req.body;
  const student = new Student(body);
  student
    .save()
    .then(student => {
      res.json(student);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports = studentCltr;
