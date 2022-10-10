const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGO_URL } = process.env;

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(MONGO_URL)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((e) => {
        console.log(e);
        return cb(e);
      });
  },
  getDb: () => dbConnection,
};
