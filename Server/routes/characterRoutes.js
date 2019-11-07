const express = require('express');

const charactersController = require('../controllers/charactersController');

const router = express.Router();

router.post(
  '/creation',
  charactersController.createCharacter,
  (req, res) => console.log('created a character in router')
  // res.status(200).json([...res.locals.characters])
);

router.get(
  '/:character_id',
  charactersController.getSingleCharacter,
  (req, res) => console.log('getting a single character in router')
  // res.status(200).json([...res.locals.characters])
);

module.exports = router;
