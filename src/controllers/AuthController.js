/* eslint-disable no-unused-vars */
const Controllers = require('./Controllers');
const UsuarioService = require('../services/UsuarioService');

const usuarioService = new UsuarioService();

class AuthController extends Controllers {
  constructor() {
    super(usuarioService);
  }

  async createUsuario(req, res, next) {
    const { body } = req;
    try {
      const dados = await this.serviceEntity.createUser(body);
      return res.status(200).json(dados);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = AuthController;
