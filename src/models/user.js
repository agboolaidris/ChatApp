"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  User.init(
    {
      username: { type: DataTypes.STRING(20), unique: true, allowNull: false },
      email: { type: DataTypes.STRING(100), unique: true, allowNull: false },
      password: { type: DataTypes.STRING(30), allowNull: false },
      avater: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
