/* eslint-disable max-len */
const Service = require('./Services');

class ClienteService extends Service {
  constructor() {
    super('Cliente');
    this.usuarioService = new Service('Usuario');
    this.gerenteService = new Service('Gerente');
  }

  async getUserCliente(id) {
    const cliente = await super.getDataForId(id);
    if (cliente) {
      const userExisting = await this.usuarioService.getDataForId({ id: cliente.id_usuario });
      const gerenteExisting = await this.gerenteService.getDataForId({ id: cliente.id_gerente });
      const userGerenteExisting = await this.usuarioService.getDataForId({ id: gerenteExisting.id_usuario });

      return {
        cliente: userExisting.nome,
        id_usuario: cliente.id_usuario,
        Email: userExisting.email,
        Sexo: userExisting.sexo,
        Cidade: userExisting.cidade,
        Gerente: userGerenteExisting.nome,
        id_gerente: cliente.id_gerente,
      };
    }
    throw new Error('cliente inexistente');
  }
}

module.exports = ClienteService;
