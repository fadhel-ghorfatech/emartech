const db = require("../models");
const EmailService = require("../helpers/email");

const DailyNewsSubscriberEmail = db.dailyNewsSubscriberEmail;
// Assuming this is the model for the daily news subscribers' emails

exports.addSubscriber = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the email already exists in the database
    const existingSubscriber = await DailyNewsSubscriberEmail.findOne({
      where: {
        email,
      },
    });

    // If the email already exists, return an error
    if (existingSubscriber) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    // If the email does not exist, create a new subscriber record
    const newSubscriber = await DailyNewsSubscriberEmail.create({
      email,
      subscription_date: new Date(), // Set the current date as the subscription date
    });

    // Send a success response
    return res.status(201).json({
      message: "Subscriber added successfully",
      subscriber: newSubscriber,
    });
  } catch (error) {
    // Handle errors
    console.error("Error adding subscriber:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.sendMailToNewSubscriber = async () => {
  try {
    // Check if the email already exists in the database
    const nonSubscribedUsers = await DailyNewsSubscriberEmail.findAll({
      where: {
        isSubscribed: false,
      },
    });
    if (nonSubscribedUsers.length) {
      for (const item of nonSubscribedUsers) {
        await EmailService.sendNewsSubsriberEmail({ email: item.email });
        await DailyNewsSubscriberEmail.update(
          { isSubscribed: true },
          { where: { email: item.email } },
        );
      }
    } else {
      console.log("--------All the users are subsribed------");
    }
  } catch (error) {
    // Handle errors
    console.error("Error in sendMailToNewSubscriber ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
