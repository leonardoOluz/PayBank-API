/* eslint-disable no-unused-vars */
class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getData(req, res, next) {
    try {
      const dados = await this.serviceEntity.gelAllData();
      return res.status(200).json(dados);
    } catch (error) {
      return next(error);
    }
  }

  async getForId(req, res, next) {
    const { id } = req.params;
    try {
      const dado = await this.serviceEntity.getDataForId({ id });
      if (dado) {
        return res.status(200).json(dado);
      }
      return res.status(400).json({ message: 'não foi possível localizador os dados' });
    } catch (error) {
      return next(error);
    }
  }

  async createData(req, res, next) {
    const dte = req.body;
    try {
      const result = await this.serviceEntity.postData(dte);
      return res.status(201).json(result);
    } catch (error) {
      return next(error);
    }
  }

  async updateData(req, res, next) {
    const { id } = req.params;
    const { body } = req;
    try {
      const result = await this.serviceEntity.putData(id, body);
      if (result[0]) {
        return res.status(200).json({ message: 'dados atualizado com sucesso' });
      }
      return res.status(200).json({ message: 'verifique os dados passado' });
    } catch (error) {
      return next(error);
    }
  }

  async deleteData(req, res, next) {
    const { id } = req.params;
    try {
      const result = await this.serviceEntity.destroyData(id);
      if (!result) {
        return res.status(200).json({ message: 'Não foi possivel deletar.' });
      }
      return res.status(200).json({ message: 'id deletado com sucesso' });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = Controller;
