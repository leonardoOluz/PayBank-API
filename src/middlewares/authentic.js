const { verify, decode } = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Necessário informar o token' });
    }
    const [, acessToken] = token.split(' ');
    verify(acessToken, process.env.MD5);
    const { id, user } = decode(acessToken);
    req.id = id;
    req.user = user;

    return next();
  } catch (error) {
    return req.status(500).json({ message: error });
  }
};
