import { DataTypes, Model } from "sequelize";
import db from "../config/config";

class Preferencia extends Model {
  public id!: number;
  public nombre_parametro!: string;
  public valor_parametro!: string;
}

Preferencia.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_parametro: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  valor_parametro: {
    type: DataTypes.STRING(1024),
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'preferencias'
});

export default Preferencia;
