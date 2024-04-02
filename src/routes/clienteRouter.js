const { Router } = require('express');
const ClienteController = require('../controllers/ClienteController');

const clienteController = new ClienteController();
const router = Router();

router
  .get('/cliente', (req, res, next) => clienteController.getData(req, res, next))
  .get('/cliente/:id', (req, res, next) => clienteController.getForId(req, res, next))
  .post('/cliente', (req, res, next) => clienteController.createData(req, res, next))
  .put('/cliente/:id', (req, res, next) => clienteController.updateData(req, res, next))
  .delete('/cliente/:id', (req, res, next) => clienteController.deleteData(req, res, next));

module.exports = router;
