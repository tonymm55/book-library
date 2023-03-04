/* src/models/reader.js */
module.exports = (sequelize, DataTypes) => {
    const schema = {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    };
  
    return sequelize.define('Reader', schema);
  
  };


