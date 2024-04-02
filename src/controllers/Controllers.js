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
      return res.status(500).json({ message: error.message });
    }
  }

  async getForId(req, res, next) {
    const { id } = req.params;
    try {
      const dado = this.serviceEntity.getDataForId(Number(id));
      return res.status(200).json(dado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async createData(res, req, next) {
    const dte = req.body;
    try {
      const result = await this.serviceEntity.postData(dte);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async updateData(res, req, next) {
    const { id } = req.params;
    const { body } = req;
    try {
      const result = await this.serviceEntity.putData(Number(id), body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async deleteData(res, req, next) {
    const { id } = req.params;
    try {
      const result = await this.serviceEntity.destroyData(Number(id));
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = Controller;
