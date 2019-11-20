require("dotenv").config();
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const { SERVER_PORT } = process.env;

const path = require("path"); // Usually moved to the start of file

const app = express();

app.use(express.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("database connected");
  })
  .catch(err => {
    console.log(err);
  });

const { getJobs } = require("./controllers/jobBoardController");

// Retrieve jobs from database
app.get("/getjobs", getJobs);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PORT}`);
});
