const { randomBytes, scryptSync } = require('crypto');

module.exports = (senha) => {
  const sal = randomBytes(16).toString('hex');
  const hash = scryptSync(senha, sal, 64).toString('hex');
  return { sal, hash };
};
