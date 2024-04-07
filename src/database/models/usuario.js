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
        notEmpty: {
          msg: 'Campo Nome obrigatório',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Campo Email obrigatório',
        },
        isEmail: {
          msg: 'Campo digitado não é email válido',
        },
      },
    },
    sexo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Campo Sexo obrigatório',
        },
        isIn: {
          args: [['masculino', 'feminino']],
          msg: 'Por favor verifique o sexo indicado',
        },
      },
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Campo Rua obrigatório',
        },
      },
    },
    numero: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Campo Numero de endereço obrigatório',
        },
        isFloat: {
          msg: 'Campo numero do endereço tem que ser numerico',
        },
      },
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Campo Bairro Obrigatório',
        },
      },
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Campo Cidade obrigatório',
        },
      },
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'CAMPO Cep obrigatório',
        },
      },
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'CPF Existente',
      },
      validate: {
        notEmpty: {
          msg: 'Campo CPF obrigatório',
        },
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
    defaultScope: {
      attributes: {
        exclude: ['hash', 'sal', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      loginScope: {
        attributes: {
          include: ['hash', 'sal'],
        },
      },
    },
  });
  return Usuario;
};
