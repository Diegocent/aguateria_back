import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const dbName = process.env.DB_NAME || 'aguateria_db';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || '050698';
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || '3306';
const dbDialect = 'mysql'; 

// Construir la URL de conexión
const dbUrl = process.env.MYSQL_URL || `mysql://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;

const db = new Sequelize(dbUrl, {
    dialect: dbDialect,
    logging: process.env.DB_LOGGING === 'true', 
    pool: {
        max: 5,
        min: 0,
        acquire: 30000, 
        idle: 10000 
    }
});

db.authenticate()
    .then(() => console.log('Conexión a la base de datos establecida correctamente.'))
    .catch((error) => console.error('Error al conectar a la base de datos:', error.message || error));

export default db;
