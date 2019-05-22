const Sequelize = require("sequelize");

const sequelize = new Sequelize("echelon_dev", "brian", "", {
  host: "localhost",
  dialect: "postgres"
});

const User = sequelize.import("../models/user");
const Event = sequelize.import("../models/event");

User.sync();
Event.sync();

module.exports = { User, Event };
