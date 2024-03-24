const Controller = require('./Controllers');
const ClienteService = require('../services/ClienteService');

/* Instância new class */
const cliente = new ClienteService();

class ClienteController extends Controller {
  constructor() {
    super(cliente);
  }
}

module.exports = ClienteController;
