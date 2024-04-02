const { Router } = require('express');
const GerenteController = require('../controllers/GerenteController');

const gerenteController = new GerenteController();
const router = Router();

router
  .get('/gerente', (req, res, next) => gerenteController.getData(req, res, next))
  .get('/gerente/:id', (req, res, next) => gerenteController.getForId(req, res, next))
  .post('/gerente', (req, res, next) => gerenteController.createData(req, res, next))
  .put('/gerente/:id', (req, res, next) => gerenteController.updateData(res, res, next))
  .delete('/gerente/:id', (req, res, next) => gerenteController.deleteData(req, res, next));

module.exports = router;
