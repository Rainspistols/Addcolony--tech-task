const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../connection');
const db = require('../connection');

Router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * from tododb.todos', (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

Router.post('/add', (req, res) => {
  const { priority, title, description, uuid } = req.body;

  const err = {};

  if (!priority.match(/blocker$|critical$|moderate$|normal$/i)) {
    return (err.priority =
      'Priority should be one of this blocker critical moderate normal');
  }
  if (!title.trim()) {
    return (err.title = 'Title cannot be empty');
  }

  if (Object.keys(err).length !== 0) {
    return res.status(400).send({ error: err });
  }

  db.query(
    `INSERT INTO tododb.todos (priority, title, description, uuid) VALUES (?, ?, ?, ?)`,
    [priority, title, description, uuid],
    function (err, response, fiedls) {
      if (err) throw err;
      return res.json({ message: 'Todo added' });
    }
  );
});

Router.post('/update', (req, res) => {
  const { uuid, title, description, priority } = req.body;

  if (!uuid) {
    return res.status(400).send({ error: 'uuid is not correct' });
  }

  const err = {};
  if (!priority.match(/blocker$|critical$|moderate$|normal$/i)) {
    err.priority =
      'Priority should be one of this blocker critical moderate normal';
  }

  if (!title.trim()) {
    err.title = 'Title cannot be empty';
  }

  if (Object.keys(err).length !== 0) {
    return res.status(400).send({ error: err });
  }

  db.query(
    `UPDATE tododb.todos SET title=?, priority=?, description=? where uuid=?`,
    [title, priority, description, uuid],
    (err, rows, fields) => {
      if (!err) {
        res.send({ message: 'Todos update' });
      } else {
        console.log(err);
      }
    }
  );
});

Router.post('/delete', (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).send({ error: 'id is not correct' });
  }

  db.query(`DELETE FROM tododb.todos WHERE uuid=?`, id, (err, rows, fields) => {
    if (!err) {
      res.send({ message: 'Todos deleted' });
    } else {
      console.log(err);
    }
  });
});

module.exports = Router;
