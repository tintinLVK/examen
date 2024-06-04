const { DataTypes } = require("sequelize");
const connexion = require("./../DB/dbConnect");

const Blague = connexion.define("Blague", {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  blague: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reponse: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Blague;