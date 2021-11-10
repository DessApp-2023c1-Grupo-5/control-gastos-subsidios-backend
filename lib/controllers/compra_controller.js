//import Compra from '../models/compra';

export const getCompras = async (req, res) => {
  //const compra = await Compra.findAll({});
  res.json({
    fecha: '2021-02-01',
    rubro: 'Electronica',
    subrubro: 'Infromatica/Computadoras',
    numeroCompra: '10',
    proveedor: 'Compumundo SA',
    monto: '100000',
    estado: 'Finalizada',
    factura: 'www.linkfactura.com',
  });
  //res.json({ data: compra.map((compra) => compra.toJSON()) });
};
