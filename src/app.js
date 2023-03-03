const express = require('express');

const app = express();

app.use(express.json());

const readerRouter = require('./routes/reader');




app.post(readerRouter); //route handler




module.exports = app; 









// not in the books library solution. My Postman test only. Need npm start to run.
// type in localhost:4000 to browser.
app.get('/', (_, res) => {
    console.log('Refresh Browser!')
    res.status(200).json({ output: 'Hello Reader!' });
  });
