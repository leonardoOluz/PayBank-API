const { verify, decode } = require('jsonwebtoken');
const UsuarioService = require('../services/UsuarioService');

const usuarioService = new UsuarioService();

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Necessário informar o token' });
    }
    const [, acessToken] = token.split(' ');
    verify(acessToken, process.env.MD5);
    const { id, user } = decode(acessToken);
    const result = await usuarioService.getDataForId({ id });

    if (result) {
      req.id = id;
      req.user = user;
      return next();
    }

    return res.status(404).json({ message: 'Verifique o acesso do usuario!' });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
