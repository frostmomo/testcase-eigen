'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.Member, { foreignKey: 'borrowedBy' });
    }
  }
   
  Book.init({
    code: DataTypes.STRING,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    borrowed: {
      type:DataTypes.BOOLEAN,
      defaultValue:false
    },
    borrowedBy: {
      type:DataTypes.INTEGER,
      defaultValue:0
    },
    borrowedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Book',
  });

  return Book;
};