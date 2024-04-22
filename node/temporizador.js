const schedule = require("node-schedule");

const t1 = schedule.scheduleJob("*/5*****", function () {
  console.log("exec..", new Date().getSeconds());
});

setTimeout(function () {
  t1.cancel();
  console.log("Cancelando tarefa 1");
}, 10000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 12;
regra.second = 10;

const t2 = new schedule.scheduleJob(regra, function () {
  console.log("Executando t2", new Date().getSeconds());
});
