const Service = require('./Services');
const generateHashSal = require('../utils/generateHashSal');

class UsuarioService extends Service {
  constructor() {
    super('Usuario');
  }

  async createUser(dte) {
    const { sal, hash } = generateHashSal(dte.senha);
    return super.postData({
      nome: dte.nome,
      email: dte.email,
      sexo: dte.sexo,
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
}

module.exports = UsuarioService;
