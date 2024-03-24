/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable strict */
/* eslint-disable lines-around-directive */
'use strict';
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.hasMany(models.Gerente, {
        foreignKey: 'id_usuario',
      });
      Usuario.hasMany(models.Cliente, {
        foreignKey: 'id_usuario',
      });
      Usuario.hasMany(models.Banco, {
        foreignKey: 'id_usuario',
      });
    }
  }
  Usuario.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    sexo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        contains: {
          args: ['masc', 'fem'],
          msg: 'Por favor verifique o sexo indicado',
        },
      },
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    cep: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    cpf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    sal: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'Usuarios',
  });
  return Usuario;
};
