const Controller = require('./Controllers');
const UsuarioService = require('../services/UsuarioService');

/* instância new class */
const usuario = new UsuarioService();

class UsuarioController extends Controller {
  constructor() {
    super(usuario);
  }
}

module.exports = UsuarioController;
