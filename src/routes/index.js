/* eslint-disable no-undef */

const express = require('express');

const router = express.Router();

// Routes
router.get('/', (req, res) => {
  // Getting all gifts from database
  const getGiftsQuery = 'SELECT * FROM `gifts`';
  db.query(getGiftsQuery, (err, result) => {
    if (err) {
      res.status(500).send(err);
    }

    res.render('index', result);
  });
});

module.exports = router;
