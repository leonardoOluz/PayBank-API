const IncorrectRequest = require('./IncorrectRequest');

class ValidationError extends IncorrectRequest {
  constructor(error) {
    const message = Object.values(error.errors)
      .map((erro) => erro.message)
      .join('; ');
    super(`Foram encontrado os seguintes erros: ${message}`);
  }
}

module.exports = ValidationError;
