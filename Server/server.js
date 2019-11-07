const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fetch = require('node-fetch');
const db = require('./models/Model.js');

const userController = require('./controllers/userController.js');
const cookieController = require('./controllers/cookieController.js');

const characterRoutes = require('./routes/characterRoutes');
const classesRoutes = require('./routes/classesRouter');
const racesRoutes = require('./routes/racesRouter');

const PORT = 3000;

const app = express();

/**
 * Set our Express view engine as ejs.
 * This means whenever we call res.render, ejs will be used to compile the template.
 * ejs templates are located in the client/ directory
 */
app.set('view engine', 'ejs');

/**
 * Automatically parse urlencoded body content from incoming requests and place it
 * in req.body
 */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// app.use('/*', function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
//   );
//   next();
// });

app.get('/', (req, res) => {
  // res.render('./../client/index.ejs');
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

// app.get('/signup', (req, res) => {
//   // res.render('./../client/signup', { error: null });
// });

app.post('/signup', userController.createUser, (req, res) => {
  // console.log('I am here');
  console.log('backend');

  if (res.locals.success) return res.sendStatus(200);
  return res.sendStatus(400);
  // res.status(200).json(JSON.stringify({ success: res.locals.success }));

  // if (res.locals.success) res.render('./../Client/characterCreation.ejs');
  // if (res.locals.success) res.redirect('/');
  // else res.render('./../Client/signup.ejs', { error: res.locals.error });
});

app.post(
  '/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  (req, res) => {
    console.log('signing in');

    if (res.locals.success)
      return res.status(200).json({ user_id: res.locals.id });
    return res.sendStatus(400);
    // console.log(req.cookies.ssid_dnd);

    // if (res.locals.success) res.redirect('/characterCreation');
    // else res.render('./../Client/signup.ejs', { error: res.locals.error });
  }
);

app.use('/characters', characterRoutes);
app.use('/classes', classesRoutes);
app.use('/races', racesRoutes);

/**
 * 404 handler
 */
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;

// db.query('SELECT * FROM users', null, (err, res) => {
//   if (err) console.log(err);
//   console.log(res);
// });
