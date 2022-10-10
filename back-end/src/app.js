const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const submissionsRouter = require("./submissions/submissions.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/submissions", submissionsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
