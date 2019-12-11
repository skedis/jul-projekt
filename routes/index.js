/* global db */
const express = require('express');

const router = express.Router();

// Routes
router.get('/', (req, res) => {
  // Getting all gifts from database
  const getGiftsQuery = 'SELECT * FROM `gifts`';
  db.query(getGiftsQuery, (err, result) => {
    if (err) throw err;

    res.render('index', { gifts: result });
  });
});

module.exports = router;
