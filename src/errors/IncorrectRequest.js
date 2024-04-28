const ErroBase = require('./ErroBase');

class IncorrectRequest extends ErroBase {
  constructor(message = 'Um ou mais dados fornecidas estão incorretos.') {
    super(message, 400);
  }
}

module.exports = IncorrectRequest;
