import { DataTypes, Model } from "sequelize";
import db from "../config/config";
import Consumo from "./consumo.model";

class DetallePago extends Model {
  public id!: number;
  public fecha_pago!: Date;
  public monto_abonado!: number;
  public id_consumo!: number;
}

DetallePago.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha_pago: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  monto_abonado: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  id_consumo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Consumo,
      key: 'id'
    }
  }
}, {
  sequelize: db,
  tableName: 'detalles_pago'
});

export default DetallePago;
