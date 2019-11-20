const getJobs = (req, res) => {
  const db = req.app.get("db");
  db.getJobs().then(lua_jobs => res.status(200).json(lua_jobs));
  console.log("hit");
};

const spikrTest = (req, res) => {
  console.log("trying to hit spikr");
  res.status(200).json("stuff");
};

module.exports = {
  getJobs,
  spikrTest
};
