const { Router } = require('express');
const BancoController = require('../controllers/BancoController');

const bancoController = new BancoController();
const router = Router();

router
  .get('/banco', (req, res, next) => bancoController.getData(req, res, next))
  .get('/banco/:id', (req, res, next) => bancoController.getForId(req, res, next))
  .post('/banco', (req, res, next) => bancoController.createData(req, res, next))
  .put('/banco/:id', (req, res, next) => bancoController.updateData(res, res, next))
  .delete('/banco/:id', (req, res, next) => bancoController.deleteData(req, res, next));

module.exports = router;
