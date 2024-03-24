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
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Gerente',
    tableName: 'Gerentes',
  });
  return Gerente;
};
