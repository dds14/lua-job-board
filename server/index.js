require("dotenv").config();
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const request = require("request");
const { SERVER_PORT } = process.env;

const path = require("path"); // Usually moved to the start of file

const app = express();

// const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/../build`));
// app.use(express.json());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PORT}`);
});

// app.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
