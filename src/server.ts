import express, { Application } from "express";
import cors from "cors";
import db from "./config/config";
import routes from './routes/index'; 

class Server {
  private async dbConnection() {
    try {
      await db.authenticate();
      console.log("Conexión a la base de datos exitosa.");
      await db.sync();
      console.log("Base de datos sincronizada.");
    } catch (error) {
      console.error("Error al conectar con la base de datos:", error);
    }
  }

  private app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.dbConnection();
  }

  private config(): void {
    // Middlewares
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use('/api', routes);
  }

  public start(): void {
    const port = process.env.PORT || 3000;
    this.app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`);
    });
  }
}

export default Server;
