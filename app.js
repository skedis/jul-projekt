/* Christopher G 17TEK-S */
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const index = require('./src/routes/index');

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
  if (err) {
    console.log('Failed to connect to database'); return;
    // throw err;
  }
  console.log('Connected to database');
});

// Global for easier use in other files
global.db = db;

// Setting up static directory
app.use(express.static(path.join(__dirname, '/public/')));

// Setting up view engine
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', index);

// Start listening on port
app.listen(port, () => {
  console.log(`Listening on http://127.0.0.1:${port}`);
});
