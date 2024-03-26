const controller = require("../controllers/dailyNewsSubscriberEmail.controller");

module.exports = (app) => {
  app.post("/api/subscribe", controller.addSubscriber);
};
