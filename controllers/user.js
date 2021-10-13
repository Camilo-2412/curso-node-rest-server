const usuariosGet = (req, res) => {
  const params = req.query;

  res.json({
    msg: "get API",
  });
};

const usuariosPut = (req, res) => {
  const id = req.params.id;
  res.json({
    msg: "put API",
    id,
  });
};

const usuariosPost = (req, res) => {
  const body = req.body;

  res.json({
    msg: "Post API",
    body,
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msg: "Delete API",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
};
