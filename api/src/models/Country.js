const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    coatOfArms: {
      type: DataTypes.STRING
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false
    },
    maps: {
      type: DataTypes.STRING,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    population: {
      type: DataTypes.INTEGER,
    },
    languages: {
      type: DataTypes.STRING,
    },
    latUno: {
      type: DataTypes.INTEGER
    },
    latDos: {
      type: DataTypes.INTEGER
    }
  }, { timestamps: false });
};
