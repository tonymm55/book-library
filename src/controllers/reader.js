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

exports.findAllReaders = async (req, res) => {
  const readers = await Reader.findAll(req.params.id);
  res.status(200).json(readers);  
};