const express = require('express');

const classesController = require('../controllers/classesController');

const router = express.Router();

router.get(
  '/:class_name',
  classesController.getSingleClass,
  (req, res) => console.log('in router get all classes')
  // res.status(200).json([...res.locals.characters])
);

router.get('/', classesController.getAllClasses, (req, res) => {
  console.log('in router get all classes');
  res.status(200).json([...res.locals.classes]);
});

module.exports = router;
