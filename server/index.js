require("dotenv").config();
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const request = require("request");
const { SERVER_PORT } = process.env;

const path = require("path"); // Usually moved to the start of file

const app = express();

app.use(express.json());

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

const { getJobs, spikrTest } = require("./controllers/jobBoardController");

// Retrieve jobs from database
app.get("/getjobs", getJobs);

//  🔥 ⏱ Ignore this for now - testing with Jobspikr API
// app.get(
//   "https://cors-anywhere.herokuapp.com/https://api.jobspikr.com/v1/data?client_id=lua_jp_6f50e58847&client_auth_key=GN6tnQtPAvwdMqVwkLY6C1RWdvr32P3u8TOe_qSv40Y&search_query_string={search_query_size}&size=50",
//   spikrTest
// );

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PORT}`);
});
