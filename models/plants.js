'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Plants.belongsTo(models.User, {foreignKey: "userId"});
    }
  };
  Plants.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    light: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Plants',
  });
  return Plants;
};