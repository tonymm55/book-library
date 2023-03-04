// src/routes/artist.js
const express = require('express');
const router = express.Router();

const controllers = require('../controllers/reader');



router.post('/readers', controllers.createReader);
router.get("/readers", controllers.readReader);

module.exports = router;  