// src/routes/artist.js
const express = require('express');
const router = express.Router();

const readerController = require('../controllers/reader');



router.post('/', readerController.createReader);

module.exports = router;  