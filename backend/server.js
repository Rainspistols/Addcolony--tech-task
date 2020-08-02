const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const mysqlConnection = require('./connection');

let app = express();
const TodosRoutes = require('./routes/todos');

app.use(cors({ origin: true }));

app.use(bodyParser.json());

app.use('/api/todos', TodosRoutes);

app.listen(3000);
