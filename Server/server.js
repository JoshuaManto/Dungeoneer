const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fetch = require('node-fetch');
const db = require('./models/userModel.js');

const userController = require('./controllers/userController.js');
const cookieController = require('./controllers/cookieController.js');

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
app.use(cookieParser());

app.get('/', (req, res) => {
  /**
   * Since we set `ejs` to be the view engine above, `res.render` will parse the
   * template page we pass it (in this case 'client/secret.ejs') as ejs and produce
   * a string of proper HTML which will be sent to the client!
   */

  res.render('./../client/index.ejs');
});

app.get('/signup', (req, res) => {
  res.render('./../client/signup', { error: null });
});

app.post('/signup', userController.createUser, (req, res) => {
  // console.log('I am here');

  // if (res.locals.success) res.render('./../Client/characterCreation.ejs');
  if (res.locals.success) res.redirect('/');
  else res.render('./../Client/signup.ejs', { error: res.locals.error });
});

app.post(
  '/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  (req, res) => {
    console.log('signing in');
    // console.log(req.cookies.ssid_dnd);

    if (res.locals.success) res.redirect('/characterCreation');
    else res.render('./../Client/signup.ejs', { error: res.locals.error });
  }
);

app.get('/characterCreation', (req, res) => {
  res.render('./../client/characterCreation', { error: null });
});

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
