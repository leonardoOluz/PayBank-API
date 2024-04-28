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
      await this.serviceEntity.createUser(body);
      return res.status(200).json({ message: 'Usuario criado com sucesso !' });
    } catch (error) {
      return next(error);
    }
  }

  async checkUserAndLogar(req, res, next) {
    const { body } = req;
    try {
      const dataTheUser = await this.serviceEntity.getUserLogin(body);
      return res.status(201).json({ Message: dataTheUser });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = AuthController;
