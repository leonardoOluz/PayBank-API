const Service = require('./Services');

class GerenteService extends Service {
  constructor() {
    super('Gerente');
    this.usuarioService = new Service('Usuario');
  }

  async getUserGerente(id) {
    const gerente = await super.getDataForId(id);
    if (gerente) {
      const userExisting = await this.usuarioService.getDataForId({ id: gerente.id_usuario });
      return {
        gerente,
        Nome: userExisting.nome,
        Email: userExisting.email,
        Sexo: userExisting.sexo,
        Cidade: userExisting.cidade,
      };
    }
    throw new Error('gerente inexistente');
  }
}

module.exports = GerenteService;
