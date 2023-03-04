// src/routes/reader.js
const express = require('express');
const router = express.Router();

const controllers = require('../controllers/reader');



router.post('/readers', controllers.createReader);
router.get('/readers', controllers.findAllReaders);

module.exports = router;  