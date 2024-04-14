const Service = require('./Services');
const generateHashSal = require('../utils/generateHashSal');
const checkUser = require('../utils/checkUser');
const generateToken = require('../utils/generateToken');

class UsuarioService extends Service {
  constructor() {
    super('Usuario');
  }

  async createUser(dte) {
    const { sal, hash } = generateHashSal(dte.senha);
    return super.postData({
      nome: dte.nome,
      email: dte.email,
      sexo: dte.sexo.toLowerCase(),
      rua: dte.rua,
      numero: Number(dte.numero),
      bairro: dte.bairro,
      cidade: dte.cidade,
      cep: dte.cep,
      cpf: dte.cpf,
      hash,
      sal,
    });
  }

  async getUserLogin(dte) {
    const dbUser = await super.getDataForScope('loginScope', { email: dte.email });
    if (!dbUser) {
      throw new Error('Usuario inexistente!');
    }
    if (await checkUser(dte.senha, dbUser.dataValues)) {
      return generateToken({ id: dbUser.dataValues.id, user: dbUser.dataValues.nome });
    }
    throw new Error('Verifique a senha digitada!');
  }
}

module.exports = UsuarioService;
