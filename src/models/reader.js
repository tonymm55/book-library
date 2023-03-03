/* src/models/reader.js */
module.exports = (connection, DataTypes) => {
    const schema = {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    };
  
    const ReaderModel = connection.define('Reader', schema);
    return ReaderModel;
  };

// module.exports = (connection, DataTypes) => { 
//     const schema = {
//         name: DataTypes.STRING,
//         email: DataTypes.STRING,
//     };

//     const ReaderModel = connection.define('Reader', schema);
//     return ReaderModel;
// };

