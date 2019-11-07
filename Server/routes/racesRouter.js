const express = require('express');

const racesController = require('../controllers/racesController');

const router = express.Router();

router.get(
  '/:race_name',
  racesController.getSingleRace,
  (req, res) => console.log('in router get all classes')
  // res.status(200).json([...res.locals.characters])
);

router.get(
  '/',
  racesController.getAllRaces,
  (req, res) => console.log('in router get all classes')
  // res.status(200).json([...res.locals.characters])
);

module.exports = router;
