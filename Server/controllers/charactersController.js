const db = require('../models/Model.js');

const charactersController = {};

charactersController.createCharacter = createCharacter;
charactersController.getSingleCharacter = getSingleCharacter;
charactersController.getAllCharactersForSinglePlayer = getAllCharactersForSinglePlayer;

async function createCharacter(req, res, next) {
  console.log(req.body);

  const user_id = req.body.user_id;
  const race_id = req.body.race_id;
  const class_id = req.body.class_id;
  const name = req.body.name;
  const background = req.body.background;
  const level = req.body.level;
  const strength = req.body.strength;
  const dexterity = req.body.dexterity;
  const constitution = req.body.constitution;
  const intelligence = req.body.intelligence;
  const wisdom = req.body.wisdom;
  const charisma = req.body.charisma;
  const passivePerception = req.body.passivePerception;
  const alignment = req.body.alignment;

  const query =
    'INSERT INTO "Characters" ("race_id", "class_id", "Name", "Background", "Level", "Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma", "PassivePerception", "Alignment" ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING character_id';

  const values = [
    race_id,
    class_id,
    name,
    background,
    level,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    passivePerception,
    alignment
  ];

  await db.query(query, values, async (err, response) => {
    console.log(response);
    console.log(response.rows[0].character_id);
    if (err) {
      res.locals.error = err;
      res.locals.success = false;
      return next();
    }

    res.locals.character_id = response.rows[0].character_id;

    // query here add to user character table

    const innerQuery =
      'INSERT INTO "Users_Characters" ("user_id", "character_id") VALUES ($1, $2)';

    const innerValues = [user_id, response.rows[0].character_id];

    console.log('pre inner query');
    await db.query(innerQuery, innerValues, (error, resp) => {
      if (error) {
        res.locals.error = error;
        res.locals.success = false;
        return next();
      }
      console.log(resp);

      res.locals.success = true;

      return next();
    });
  });
}

async function getSingleCharacter(req, res, next) {
  console.log(req.params);

  const query = 'SELECT * FROM "Characters" WHERE "character_id" = $1';

  const values = [req.params.character_id];

  await db.query(query, values, (err, response) => {
    console.log(response);
    console.log(response.rows);
    if (err) {
      res.locals.error = err;
      res.locals.success = false;
      return next();
    }

    res.locals.character = response.rows;
    res.locals.success = true;

    return next();
  });
}

async function getAllCharactersForSinglePlayer(req, res, next) {
  console.log(req.body);
  console.log('getting character of a user');

  const query =
    'SELECT c.* FROM "Users_Characters" uc LEFT OUTER JOIN "users" u ON uc."user_id" = u."user_id" LEFT OUTER JOIN "Characters" c ON uc."character_id" = c."character_id" WHERE u."user_id" = $1';
  const values = [req.body.user_id];

  db.query(query, values, (err, response) => {
    console.log(response);
    console.log('CHARACTERS: ', response.rows);
    if (err) {
      res.locals.error = err;
      res.locals.success = false;
      return next();
    }

    res.locals.characters = response.rows;
    res.locals.success = true;

    return next();
  });
}

module.exports = charactersController;

// INSERT INTO "Characters" ("race_id", "class_id", "Name", "Background", "Level", "Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma", "PassivePerception", "Alignment" ) VALUES (1, 1, '1', '1', 1, 1, 1, 1, 1, 1, 1, 1, '1')
