/* eslint-disable no-shadow */
const express = require('express');
const usuario = require('./usuarioRouter');
const gerente = require('./gerenteRouter');
const cliente = require('./clienteRouter');

const app = express();

const rotaTemporaria = app.get('/welcome', (req, res) => res.status(200).json({ message: 'Welcome to API paybank' }));

module.exports = (app) => {
  app.use(
    express.json(),
    rotaTemporaria,
    usuario,
    gerente,
    cliente,
  );
};
