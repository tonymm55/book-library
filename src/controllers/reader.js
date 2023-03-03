/* src/controllers/reader.js */
const { Reader } = require('../models');
const helper = require('./helper'); 

exports.createReader = (req, res) => {
  helper.createItem(Reader, req, res);
};

  