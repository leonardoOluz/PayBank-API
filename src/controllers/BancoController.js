const Controller = require('./Controllers');
const BancoService = require('../services/BancoService');

/* Instância new class */
const banco = BancoService();

class BancoController extends Controller {
  constructor() {
    super(banco);
  }
}

module.exports = BancoController;
