const { connectToDb, getDb } = require("../db");
const { ObjectId } = require("mongodb");

let db;
connectToDb((err) => {
  if (!err) {
    db = getDb();
  }
});

function list() {
  return db.collection("submissions").find();
}

function read(id) {
  return db.collection("submissions").findOne({ _id: ObjectId(id) });
}

function update(id, params) {
  return db
    .collection("submissions")
    .updateOne({ _id: ObjectId(id) }, { $set: params });
}

module.exports = {
  list,
  read,
  update,
};
