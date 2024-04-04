/* eslint-disable import/no-extraneous-dependencies */
const { sign } = require('jsonwebtoken');

module.exports = async (payload) => {
  try {
    const token = sign(payload, process.env.MD5, { expiresIn: '1h' });
    return { payload, token };
  } catch (error) {
    throw new Error('Não foi possivel gerar o token!');
  }
};
