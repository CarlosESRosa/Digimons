const errorMiddleware = (err, req, res, _next) => {
    if (err.status) { return res.status(err.status).json({ menssagem: err.message }); }
    return res.status(500).json({ menssagem: 'Erro interno do servidor' });
  };
  
  module.exports = errorMiddleware;