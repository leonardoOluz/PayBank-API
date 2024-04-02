const { Router } = require('express');
const AuthController = require('../controllers/AuthController');

const authController = new AuthController();

const router = Router();
router
  .post('/createUsuario', (req, res, next) => authController.createUsuario(req, res, next));

module.exports = router;
