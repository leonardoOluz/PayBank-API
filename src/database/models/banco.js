/* eslint-disable strict */

'use strict';

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Banco extends Model {
    static associate(models) {
      Banco.belongsTo(models.Cliente, {
        foreignKey: 'id_cliente',
      });
      Banco.belongsTo(models.Gerente, {
        foreignKey: 'id_gerente',
      });
    }
  }
  Banco.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
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
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  });
  return Banco;
};
