import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const dbName = process.env.DB_NAME || 'aguateria_db';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || '050698';
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || '3306';
const dbDialect = 'mysql'; // Puedes cambiar el dialecto según la base de datos que estés usando

// Construir la URL de conexión
const dbUrl = process.env.MYSQL_URL || `mysql://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;

const db = new Sequelize(dbUrl, {
    dialect: dbDialect,
    logging: process.env.DB_LOGGING === 'true', // Habilita o deshabilita el logging según la variable de entorno
    pool: {
        max: 5, // Número máximo de conexiones en el pool
        min: 0, // Número mínimo de conexiones en el pool
        acquire: 30000, // El tiempo máximo en ms que pool intentará obtener la conexión antes de lanzar un error
        idle: 10000 // El tiempo máximo en ms que una conexión puede estar inactiva antes de ser liberada
    }
});

export default db;
