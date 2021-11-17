//import Compra from '../models/compra';

export const getCompras = async (req, res) => {
  //const compra = await Compra.findAll({});
  res.json([
    {
      fecha: '2022-12-12',
      rubro: 'Rubro del primero',
      subrubro: 'Subrubro',
      numeroCompra: '10',
      proveedor: 'Proveedor',
      monto: '1000',
      estado: 'estado',
      factura: 'factura',
    },
    {
      fecha: '2021-02-02',
      rubro: 'Rubro',
      subrubro: 'Subrubro',
      numeroCompra: '10',
      proveedor: 'Proveedor',
      monto: '2000',
      estado: 'estado',
      factura: 'factura',
    },
    {
      fecha: '2021-02-03',
      rubro: 'Rubro',
      subrubro: 'Subrubro',
      numeroCompra: '10',
      proveedor: 'Proveedor',
      monto: '3000',
      estado: 'estado',
      factura: 'factura',
    },
    {
      fecha: '2021-02-04',
      rubro: 'Rubro',
      subrubro: 'Subrubro',
      numeroCompra: '10',
      proveedor: 'Proveedor',
      monto: '4000',
      estado: 'estado',
      factura: 'factura',
    },
  ]);
  //res.json({ data: compra.map((compra) => compra.toJSON()) });
};
