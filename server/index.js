require("dotenv").config();
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const { SERVER_PORT } = process.env;
// const SERVER_PORT = 4090;

const path = require("path"); // Usually moved to the start of file

const app = express();

app.use(express.json());

// massive(process.env.CONNECTION_STRING)
//   .then(db => {
//     app.set("db", db);
//     console.log("database connected");
//   })
//   .catch(err => {
//     console.log(err);
//   });

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PORT}`);
});
