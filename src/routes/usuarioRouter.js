const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const usuarioController = new UsuarioController();
const router = Router();

router
  .get('/usuario/:id', (req, res, next) => usuarioController.getForId(req, res, next))
  .get('/usuario', (req, res, next) => usuarioController.getData(req, res, next))
  .post('/usuario', (req, res, next) => usuarioController.createData(req, res, next))
  .put('/usuario/:id', (req, res, next) => usuarioController.updateData(req, res, next))
  .delete('/usuario/:id', (req, res, next) => usuarioController.deleteData(req, res, next));

module.exports = router;
