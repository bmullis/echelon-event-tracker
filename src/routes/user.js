const express = require("express");
const { User } = require("../db/sequelize");

const router = new express.Router();

router.post("/users", async (req, res) => {
  User.create({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password
  })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
