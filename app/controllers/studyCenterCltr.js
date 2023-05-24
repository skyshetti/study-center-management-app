const StudyCenter = require("../models/studyCenter");

const studyCenterCltr = {};

studyCenterCltr.create = (req, res) => {
  const body = req.body;
  const studycenter = new StudyCenter(body);

  studycenter
    .save()
    .then(center => {
      res.json(center);
    })
    .catch(err => {
      res.json(err);
    });
};
module.exports = studyCenterCltr;
