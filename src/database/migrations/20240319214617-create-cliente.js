/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable strict */
/* eslint-disable lines-around-directive */
'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      id_usuario: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: 'Usuarios', key: 'id' },
      },
      id_gerente: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: 'Gerentes', key: 'id' },
      },
      ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('Clientes');
  },
};
