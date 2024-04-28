/* eslint-disable no-unused-vars */
const { Sequelize } = require('../database/models');
const ErroBase = require('../errors/ErroBase');
const IncorrectRequest = require('../errors/IncorrectRequest');
const NotFound = require('../errors/NotFound');
const ValidationError = require('../errors/ValidationError');

module.exports = (error, req, res, next) => {
  if (error instanceof IncorrectRequest) {
    return error.sendAnswear(res);
  } if (error instanceof Sequelize.ValidationError) {
    return new ValidationError(error).sendAnswear(res);
  } if (error instanceof Sequelize.DatabaseError) {
    return IncorrectRequest().sendAnswear(res);
  } if (error instanceof NotFound) {
    return new NotFound().sendAnswear(res);
  }
  return new ErroBase().sendAnswear(res);
};
