import Usuario from '../models/usuario';
import { v4 as uuidv4 } from 'uuid';

export const index = async (req, res) => {
  const usuarios = await Usuario.findAll({});
  res.json({ data: usuarios.map((usuario) => usuario.toJSON()) });
};

export const searchUser = async (req, res) => {
  console.log('body: ' + req.body.usuario);
  const usuario = await Usuario.findOne({
    where: { usuario: req.body.usuario },
  });

  if (usuario) {
    res.json({ data: usuario.toJSON() });
  } else {
    res
      .status(404)
      .json({
        message: `No se encontró un usuario con id ${req.body.usuario}`,
      });
  }
};

export const postUsuario = async (req, res) => {
  //INSERT ROW
  Usuario.create({
    id: parseInt(uuidv4()),
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    usuario: req.body.usuario,
    contraseña: req.body.contraseña,
    fechaNacimiento: req.body.fechaNacimiento,
    avatar: req.body.avatar,
  })
    .then((usuario) =>
      res.status(201).send({ nombre: usuario.nombre, id: usuario.id })
    )
    .catch((error) => {
      if (error.message) {
        res.status(404).send('Bad request ' + error.message);
      } else {
        res.status(500).send({
          message: 'Bad request',
          errorType: error.name,
          errorImage: 'https://http.cat/500',
        });
      }
    });
};
