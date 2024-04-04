const schedule = require("node-schedule");
const dailyNewsSubscriberEmail = require("../controllers/dailyNewsSubscriberEmail.controller");

// Define the schedule rule
const rule = new schedule.RecurrenceRule();
rule.hour = 23; // Run at 11 PM
rule.minute = 59; // Run at 59 minutes

// Define the job to be executed

function startScheduler() {
  schedule.scheduleJob(rule, function() {
    console.log("Scheduled worker running at " + new Date());
    // Call your function to send initial mail to users here
    dailyNewsSubscriberEmail.sendMailToNewSubscriber();
  });
}

module.exports = {
  startScheduler,
};
