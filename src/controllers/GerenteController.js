const Controller = require('./Controllers');
const GerenteService = require('../services/GerenteService');

/* Instância new class */
const gerente = new GerenteService();

class GerenteController extends Controller {
  constructor() {
    super(gerente);
  }
}

module.exports = GerenteController;
