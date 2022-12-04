const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    going: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    back: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING
    }
  }, { timestamps: true });
};
