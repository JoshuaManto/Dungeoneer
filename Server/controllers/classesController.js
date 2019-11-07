const db = require('../models/Model.js');

const classesController = {};

classesController.getAllClasses = getAllClasses;
classesController.getSingleClass = getSingleClass;

async function getAllClasses(req, res, next) {
  console.log('get all classes in here');

  const query = 'SELECT * FROM "Class"';

  await db.query(query, (err, response) => {
    console.log(response.rows);
    if (err) {
      res.locals.error = err;
      res.locals.success = false;
      return next();
    }

    res.locals.classes = response.rows;
    res.locals.success = true;

    return next();
  });
}

async function getSingleClass(req, res, next) {
  console.log('get single class in here');

  // console.log(req.params.class_name);

  const query = 'SELECT * FROM "Class" WHERE "class_name" = $1';
  values = [req.params.class_name];

  await db.query(query, values, (err, response) => {
    console.log(response.rows);
    if (err) {
      res.locals.error = err;
      res.locals.success = false;
      return next();
    }

    res.locals.classes = response.rows;
    res.locals.success = true;

    return next();
  });
}

module.exports = classesController;
