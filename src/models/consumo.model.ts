import { DataTypes, Model } from "sequelize";
import db from "../config/config";
import Cliente from "./cliente.model";

class Consumo extends Model {
  public id!: number;
  public fecha_registro!: Date;
  public dato_medidor!: number;
  public monto_total!: number;
  public id_cliente!: number;
}

Consumo.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha_registro: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  dato_medidor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  monto_total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cliente,
      key: 'id'
    }
  }
}, {
  sequelize: db,
  tableName: 'consumos'
});

export default Consumo;
