/*
  Christopher G
  17 TEK-S
*/

const express = require('express');
const path = require('path');
const mysql = require('mysql');
const favicon = require('serve-favicon');
const index = require('./routes/index');

const app = express();
const port = process.env.PORT || '8000';

// Create database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'julprojekt'
});

// Connect to database
db.connect((err) => {
  if (err) throw err;

  console.log('Connected to database');
});

// Global for easier use in other files
global.db = db;

// Setting up static directory
app.use('/public', express.static(path.join(__dirname, '/public/')));

// Favicon middleware setup
app.use(favicon(path.join(__dirname, '/public', '/favicon.ico')));

// Setting up view engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', index);

app.use('*', (req, res) => {
  res.status(404).send('404 Page not found.');
});

// Start listening on port
app.listen(port, () => {
  console.log(`Listening on http://127.0.0.1:${port}`);
});
