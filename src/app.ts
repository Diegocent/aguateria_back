import Server from './server';
import config from './config/config'

class App {
  
  private server: Server;

  constructor() {
    console.log('Creando servidor...');
    this.server = new Server();
  }

  public start() {
    console.log('Iniciando servidor...')
    this.server.start();
  }
}

// Crear una nueva instancia de App y comenzar el servidor
const app = new App();
app.start();

export default App;
