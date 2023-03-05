/* src/models/reader.js */
//sequelize Models should have the same name as the table name
// module.exports = (connection, DataTypes) => {
//     const schema = {
//       name: DataTypes.STRING,
//       email: DataTypes.STRING,
//       password: DataTypes.STRING
//     };
//     const ReaderModel = connection.define('Reader', schema);
//     return ReaderModel;
//   };

module.exports = (sequelize, DataTypes) => {
  const schema = {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  };

  const ReaderModel = sequelize.define('Reader', schema);
  return ReaderModel;
};
  
//alternative way to define model
// module.exports = (sequelize, DataTypes) => {
//   const ReaderModel = sequelize.define('Reader', {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//   });

  // return ReaderModel;
// };