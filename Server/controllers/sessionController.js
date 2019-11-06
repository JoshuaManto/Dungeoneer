const db = require('../models/userModel.js');

const sessionController = {};

sessionController.startSession = startSession;

// async function startSession(req, res next) {
//   if(res.locals.success) {
//     await db.query('')
//   }
// }

module.exports = sessionController;
