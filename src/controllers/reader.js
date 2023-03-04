/* src/controllers/reader.js */
const { Reader } = require('../models');
// const helper = require("./helper");

// exports.createReader = (req, res) => {
//   helper.createItem(Reader, req, res);
// };

exports.createReader = async (req, res) => {
  const newReader = await Reader.create(req.body);
  res.status(201).json(newReader);
}; 

exports.readReader = async (req, res) => {
  const readReader = await Reader.readReader(req.params.id);
  res.status(200).json(readReader);  
};