module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "test",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
