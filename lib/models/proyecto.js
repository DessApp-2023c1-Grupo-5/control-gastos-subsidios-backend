import { Model, DataTypes } from 'sequelize';

export default class Proyecto extends Model {
  static init(sequelize) {
    return super.init(
      {
        titulo: DataTypes.STRING,
        tipo: DataTypes.STRING,
        organismo: DataTypes.STRING,
        lineaFinanciamiento: DataTypes.STRING,
        año: DataTypes.INTEGER,
        unidadAcademica: DataTypes.STRING,
        areaTematica: DataTypes.STRING,
        subsidio: DataTypes.INTEGER,
        fechaInicio: DataTypes.STRING,
        fechaFin: DataTypes.STRING,
        fechaInicioGastos: DataTypes.STRING,
        numeroProyecto: DataTypes.INTEGER,
        numeroExpediente: DataTypes.STRING,
        numeroResolucion: DataTypes.STRING,
        director: DataTypes.STRING,
        coDirector: DataTypes.STRING,
        integrantes: DataTypes.STRING,
        resumen: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Proyecto',
      }
    );
  }
}
