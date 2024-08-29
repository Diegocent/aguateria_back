import { DataTypes, Model } from "sequelize";
import db from "../config/config";

class Cliente extends Model {
  public id!: number;
  public nombre!: string;
  public apellido!: string;
  public cedula!: string;
  public telefono!: string;
  public direccion!: string;
}

Cliente.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  cedula: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true
  },
  telefono: {
    type: DataTypes.STRING(13),
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  sequelize: db,
  tableName: 'clientes'
});

export default Cliente;
