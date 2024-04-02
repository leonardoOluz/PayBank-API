/* eslint-disable strict */

'use strict';

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Banco extends Model {
    static associate(models) {
      Banco.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario',
      });
      Banco.belongsTo(models.Gerente, {
        foreignKey: 'id_gerente',
      });
    }
  }
  Banco.init({
    tipo_conta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    saldo: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    cartao: {
      type: DataTypes.STRING,
    },
    agencia: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Banco',
    tableName: 'Bancos',
  });
  return Banco;
};
