const getJobs = (req, res) => {
  const db = req.app.get("db");
  db.getJobs().then(lua_jobs => res.status(200).json(lua_jobs));
  console.log("hit");
};

module.exports = {
  getJobs
};
