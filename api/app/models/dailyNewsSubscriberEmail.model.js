const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const DailyNewsSubscriberEmail = sequelize.define(
    "DailyNewsSubscriberEmail",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Assuming each email should be unique
      },
      isSubscribed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      subscription_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "daily_news_subscribers_emails",
    },
  );

  return DailyNewsSubscriberEmail;
};
