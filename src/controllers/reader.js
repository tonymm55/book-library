/* src/controllers/reader.js */
const { Reader } = require('../models');

exports.createReader = async (req, res) => {
  const newReader = await Reader.create(req.body); //using the create method from the model
  res.status(201).json(newReader);
}; 

exports.findAllReaders = async (req, res) => {
  const readers = await Reader.findAll(req.params.id); //findAll is a Model function (find)
  res.status(200).json(readers);  
};

exports.findReaderById = async (req, res) => {
  const readerId = await Reader.findByPk(req.params.id); //findByPk is a Model function (Primary Key)

  if (!readerId) {
    res.status(404).json({ error: 'The reader could not be found.' });  
  }
  res.status(200).json(readerId);
};