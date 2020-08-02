const mysql = require('mysql');

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  // database: 'tododb',
  multipleStatements: true,
});

db.connect((err) => {
  if (!err) {
    db.query('CREATE DATABASE IF NOT EXISTS tododb', (err, res) => {
      if (err) throw err;
      console.log('DATABASE CREATED');
    });

    db.query(
      `CREATE TABLE IF NOT EXISTS tododb.todos (id INT KEY NOT NULL AUTO_INCREMENT, uuid CHAR(64), priority ENUM('blocker', 'critical', 'moderate', 'normal'), title CHAR(64) NOT NULL, description VARCHAR(256))`,
      (err, res) => {
        if (err) throw err;
        console.log('TABLE CREATED');
      }
    );
  } else {
    console.log('Connection failed', err);
  }
});


module.exports = db;
