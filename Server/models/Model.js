const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'postgres'
});

// console.log('before');

// async function query() {
//   await pool.query('SELECT * FROM "users";', (err, result) => {
//     if (err) {
//       return console.error('Error running query', err);
//     }
//     console.log(result.rows);
//     pool.end();
//   });
// }

// query();

// console.log('after');

module.exports = {
  query: (text, params, callback) => {
    const start = Date.now();
    if (callback)
      return pool.query(text, params, (err, res) => {
        const duration = Date.now() - start;
        // console.log(res);
        // console.log('Executed query ', { text, duration, rows: res.rowCount });
        callback(err, res);
      });
    return pool.query(text, params);
  }
};

// const client = new Client({
//   user: 'lhirauoy',
//   password: 'oj5aQwBDAe0k8lTeTp52z8yzq6jBO3i1',
//   host:
//     'postgres://lhirauoy:oj5aQwBDAe0k8lTeTp52z8yzq6jBO3i1@salt.db.elephantsql.com:5432/lhirauoy',
//   port: 5432,
//   database: 'DungeonsAndDragons'
// });
// const URI =
//   'postgres://ygjhialv:38qgHP0XwL4gDKbv0i6l1YB61kePQq0Y@salt.db.elephantsql.com:5432/ygjhialv';
// const client = new Client({
//   connectionString: URI
// });

// const pool = new Pool({
//   connectionString: URI
// });

// client.connect(err => {
//   if (err) return console.error('Could not connect to the database', err);

//   client.query('SELECT * FROM users', (err, result) => {
//     if (err) {
//       return console.error('Error running query', err);
//     }
//     console.log(result.rows);
//     client.end();
//   });
// });

// client
//   .connect()
//   .then(() => console.log('Connected successfully'))
//   .then(() => {
//     client.query('SELECT * FROM users');
//   })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => console.log('Could not connect to the database', err))
//   .finally(() => client.end());
