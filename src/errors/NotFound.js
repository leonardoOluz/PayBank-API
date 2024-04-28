const ErroBase = require('./ErroBase');

class NotFound extends ErroBase {
  constructor(message = 'Página não encontrada') {
    super(message, 404);
  }
}

module.exports = NotFound;
