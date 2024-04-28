const NotFound = require('../errors/NotFound');

module.exports = (req, res, next) => {
  const error404 = new NotFound();
  next(error404);
};
