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

export const postCompra = async (req, res) => {
  //INSERT ROW

  Compras.create({
    fecha: req.body.fecha,
    rubro: req.body.rubro,
    subrubro: req.body.subrubro,
    numeroCompra: req.body.numeroCompra,
    proveedor: req.body.proveedor,
    monto: req.body.monto,
    estado: req.body.estado,
    factura: req.body.factura,
    nombre: req.body.nombre,
  })
    .then((compra) => res.status(201).send({ nombre: compra.nombre }))
    .catch((error) => {
      if (error.message) {
        res.status(404).send('Bad request');
      } else {
        res.status(500).send({
          message: 'Serivice error',
          errorType: error.name,
          errorImage: 'https://http.cat/500',
        });
      }
    });
};

export const getTotal = async (req, res) => {
  const gastosTotales = await Compras.sum('monto');
  res.json({ totalGastos: gastosTotales });
};

export const findByRubro = async (req, res) => {
  const compras = await Compras.findAll();
  console.log(req.query.rubro);
  const filterComprasByRubro = compras.filter(
    (compra) => compra.rubro.toLowerCase() === req.query.rubro.toLowerCase()
  );
  let total = 0;
  filterComprasByRubro.map((compra) => (total += parseInt(compra.monto)));
  console.log(total);
  res.json({ rubro: req.query.rubro, totalGastado: total });
};
