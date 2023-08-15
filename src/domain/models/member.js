'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    static associate(models) {
      Member.hasMany(models.Book, { foreignKey: 'borrowedBy' });
    }
  }

  Member.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    borrowedBooks: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        max: 2,
      }
    },
    penalty: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    penaltyEndDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },    
  }, {
    sequelize,
    modelName: 'Member',
  });

  return Member;
}; 