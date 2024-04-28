/* eslint-disable no-unused-vars */
const Controller = require('./Controllers');
const GerenteService = require('../services/GerenteService');

/* Instância new class */
const gerente = new GerenteService();

class GerenteController extends Controller {
  constructor() {
    super(gerente);
  }

  async getUserGerenteForId(req, res, next) {
    const { id } = req.params;
    try {
      const result = await this.serviceEntity.getUserGerente({ id });
      return res.status(201).json(result);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = GerenteController;
