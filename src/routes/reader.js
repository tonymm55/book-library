// src/routes/reader.js
const express = require('express');
const router = express.Router();
const controllers = require('../controllers/reader');
// const Reader = require('../models/reader');


router.post('/readers', controllers.createReader);
router.get('/readers', controllers.findAllReaders);
router.get('/readers/:id', controllers.findReaderById);

module.exports = router;  