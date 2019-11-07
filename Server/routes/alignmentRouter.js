const express = require('express');

const alignmentController = require('../controllers/alignmentController');

const router = express.Router();

// router.get(
//   '/:alignment_name',
//   alignmentController.getSingleAlignment,
//   (req, res) => console.log('in router get single alignment')
//   // res.status(200).json([...res.locals.characters])
// );

router.get('/', alignmentController.getAllAlignment, (req, res) => {
  console.log('in router get all classes');
  console.log(res.locals.alignments);
  res.status(200).json([...res.locals.alignments]);
});

module.exports = router;
