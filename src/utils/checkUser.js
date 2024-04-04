const { scryptSync, timingSafeEqual } = require('crypto');

module.exports = async (passwordEntered, dbUser) => {
  const hashEdition = await scryptSync(passwordEntered, dbUser.sal, 64);
  const hashUserBuffer = Buffer.from(dbUser.hash, 'hex');
  const safeEqual = await timingSafeEqual(hashEdition, hashUserBuffer);
  return safeEqual;
};
