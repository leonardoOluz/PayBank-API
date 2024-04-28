/* eslint-disable no-unused-vars */
const Controller = require('./Controllers');
const ClienteService = require('../services/ClienteService');

/* Instância new class */
const cliente = new ClienteService();

class ClienteController extends Controller {
  constructor() {
    super(cliente);
  }

  async getUserClienteForId(req, res, next) {
    const { id } = req.params;
    try {
      const result = await this.serviceEntity.getUserCliente({ id });
      return res.status(201).json(result);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = ClienteController;
