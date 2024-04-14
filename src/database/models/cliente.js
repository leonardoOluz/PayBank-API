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
      Cliente.hasOne(models.Banco, {
        foreignKey: 'id_cliente',
      });
    }
  }
  Cliente.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Cliente',
    tableName: 'Clientes',
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  });
  return Cliente;
};
