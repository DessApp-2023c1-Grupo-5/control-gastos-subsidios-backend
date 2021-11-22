import { Model, DataTypes } from 'sequelize';

export default class Compra extends Model {
  static init(sequelize) {
    return super.init(
      {
        fecha: DataTypes.DATE,
        rubro: DataTypes.STRING,
        subrubro: DataTypes.STRING,
        numeroCompra: DataTypes.NUMBER,
        proveedor: DataTypes.STRING,
        monto: DataTypes.INTEGER,
        estado: DataTypes.STRING,
        factura: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Compra',
      }
    );
  }
}
