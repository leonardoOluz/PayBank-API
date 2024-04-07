/* eslint-disable no-unused-vars */
/* eslint-disable strict */
/* eslint-disable lines-around-directive */
'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bancos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      tipo_conta: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      saldo: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      cartao: {
        type: Sequelize.STRING,
      },
      id_cliente: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: 'Clientes', key: 'id' },
      },
      id_gerente: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: 'Gerentes', key: 'id' },
      },
      agencia: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bancos');
  },
};
