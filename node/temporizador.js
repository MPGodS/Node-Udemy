const schedule = require("node-schedule");

const t1 = schedule.scheduleJob("*/5*****", function () {
  console.log("exec..");
});
