class ErroBase extends Error {
  constructor(message = 'Erro interno do servidor', status = 500) {
    super();
    this.message = message;
    this.status = status;
  }

  sendAnswear(res) {
    return res.status(this.status).json({
      message: this.message,
      status: this.status,
    });
  }
}

module.exports = ErroBase;
