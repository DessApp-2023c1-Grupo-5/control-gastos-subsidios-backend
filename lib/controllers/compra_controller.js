import Compras from '../models/compras';

export const getCompra = async (req, res) => {
  const compraId = req.params.id;
  const buy = await Compras.findByPk(compraId);

  res.json(buy.toJSON());
};

export const getAllCompras = async (req, res) => {
  const compras = await Compras.findAll({});
  res.json({ data: compras.map((compra) => compra.toJSON()) });
};
