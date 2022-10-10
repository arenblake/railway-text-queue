const { PORT = 5001 } = process.env;

const app = require("./app");
// const { connectToDb, getDb } = require("./db");

// let db;
// connectToDb((err) => {
//   if (!err) {
//     app.listen(PORT, listener);
//     db = getDb();
//   }
// });

app.listen(PORT, listener);
function listener() {
  console.log(`Listening on Port ${PORT}!`);
}
