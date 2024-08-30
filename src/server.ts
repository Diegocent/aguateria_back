import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import db from "./config/config";
import routes from './routes/index'; 
import './models/index';

class Server {
  private app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.dbConnection();
    this.errorHandling();  
  }

  private async dbConnection() {
    try {
      await db.authenticate();
      console.log("Conexión a la base de datos exitosa.");
      await db.sync();
      console.log("Base de datos sincronizada.");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error al conectar con la base de datos:", error.message);
      } else {
        console.error("Error desconocido al conectar con la base de datos");
      }
    }
  }

  private config(): void {
    // Middlewares
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use('/api', routes);
  }

  private errorHandling(): void {
    // Middleware global para capturar errores
    this.app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof Error) {
        console.error(err.stack);
        res.status(500).json({
          message: 'Error interno del servidor',
          error: err.message,
        });
      } else {
        console.error("Error desconocido capturado en el middleware global");
        res.status(500).json({
          message: 'Error interno del servidor',
          error: 'Error desconocido',
        });
      }
    });
  }

  public start(): void {
    const port = process.env.PORT || 3000;
    this.app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`);
    });
  }
}

export default Server;
