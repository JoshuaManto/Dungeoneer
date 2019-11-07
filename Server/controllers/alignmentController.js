const db = require('../models/Model.js');

const alignmentController = {};

alignmentController.getAllAlignment = (req, res, next) => {
  console.log('get all alignment');

  const query = 'SELECT * FROM "Alignment"';

  // try {
  //   const res = await db.query(query);
  //   res.locals.races = res.rows;
  //   res.locals.success = true;
  //   next();
  // } catch (e) {
  //   res.locals.error = e;
  //   res.locals.success = false;
  //   next();
  // }

  // db.query(query)
  //   .then(res => {
  //     res.locals.races = res.rows;
  //     res.locals.success = true;
  //     next();
  //   })
  //   .catch(e => {
  //     res.locals.error = e;
  //     res.locals.success = false;
  //     next();
  //   });

  db.query(query, (err, response) => {
    console.log(response.rows);
    if (err) {
      res.locals.error = err;
      res.locals.success = false;
      return next();
    }

    res.locals.alignments = response.rows;
    res.locals.success = true;

    return next();
  });
};

// async function getSingleRace(req, res, next) {
//   console.log('get single race');

//   const query = 'SELECT * FROM "Race" WHERE "race_name" = $1';
//   const values = [req.params.race_name];

//   await db.query(query, values, (err, response) => {
//     console.log(response.rows);
//     if (err) {
//       res.locals.error = err;
//       res.locals.success = false;
//       return next();
//     }

//     res.locals.races = response.rows;
//     res.locals.success = true;

//     return next();
//   });
// }

module.exports = alignmentController;
