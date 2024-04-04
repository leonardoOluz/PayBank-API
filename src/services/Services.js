/* eslint-disable no-unused-vars */
const dataSource = require('../database/models');

class Service {
  constructor(modelName) {
    this.model = modelName;
  }

  async gelAllData() {
    return dataSource[this.model].findAll();
  }

  async getDataForId(dte) {
    return dataSource[this.model].findAll({ where: dte });
  }

  async getDataForScope(scope, where) {
    return dataSource[this.model].scope(scope).findOne({ where: { ...where } });
  }

  async postData(dte) {
    return dataSource[this.model].create(dte);
  }

  async putData(id, dte) {
    return dataSource[this.model].update(dte, {
      where: {
        id,
      },
    });
  }

  async destroyData(id) {
    return dataSource[this.model].destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = Service;
