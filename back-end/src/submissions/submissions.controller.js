const service = require("./submissions.service");
const { ObjectId } = require("mongodb");

function list(req, res) {
  const submissions = [];
  service
    .list()
    .forEach((submission) => submissions.push(submission))
    .then(() => {
      res.status(200).json(submissions);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch" });
    });
}

function read(req, res) {
  if (ObjectId.isValid(req.params.id)) {
    service
      .read(req.params.id)
      .then((submission) => {
        res.status(200).json(submission);
      })
      .catch(() => {
        res.status(500).json({ error: "Could not fetch" });
      });
  } else {
    res.status(500).json({ error: "Not valid Document Id" });
  }
}

function update(req, res) {
  const { data } = req.body;
  if (ObjectId.isValid(req.params.id)) {
    service
      .update(req.params.id, data)
      .then((submission) => {
        res.status(200).json(submission);
      })
      .catch(() => {
        res.status(500).json({ error: "Could not fetch" });
      });
  } else {
    res.status(500).json({ error: "Not valid Document Id" });
  }
}
module.exports = {
  list,
  read,
  update,
};
