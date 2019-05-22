const express = require("express");
const { Event } = require("../db/sequelize");

const router = new express.Router();

router.post("/events", (req, res) => {
  Event.create({
    title: req.body.title,
    description: req.body.description,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    severity: req.body.severity,
    type: req.body.type
  })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/events", (req, res) => {
  Event.findAll({})
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
