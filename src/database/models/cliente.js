/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable strict */
/* eslint-disable lines-around-directive */
'use strict';
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      Cliente.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario',
      });
      Cliente.belongsTo(models.Gerente, {
        foreignKey: 'id_gerente',
      });
    }
  }
  Cliente.init({
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    gerente_id: DataTypes.INTEGER, // Associar com gerente
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};
