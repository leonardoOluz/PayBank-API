const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Gerente extends Model {
    static associate(models) {
      Gerente.hasMany(models.Cliente, {
        foreignKey: 'id_gerente',
      });
      Gerente.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario',
      });
      Gerente.hasMany(models.Banco, {
        foreignKey: 'id_gerente',
      });
    }
  }
  Gerente.init({
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
    modelName: 'Gerente',
    tableName: 'Gerentes',
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  });
  return Gerente;
};
