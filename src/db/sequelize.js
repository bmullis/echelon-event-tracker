const Sequelize = require("sequelize");
require("dotenv").config();

const connString = process.env.DATABASE_URL;

const sequelize = new Sequelize(connString, {
  url: process.env.DATABASE_URL,
  dialect: "postgres"
});

const User = sequelize.import("../models/user");
const Event = sequelize.import("../models/event");

User.sync();
Event.sync();

module.exports = { User, Event };
