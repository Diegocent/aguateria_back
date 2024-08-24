import Cliente from './cliente.model';
import Consumo from './consumo.model';
import DetallePago from './detallepago.model';
import Preferencia from './preferencia.model';
import db from '../config/config';

// Definir las relaciones entre los modelos
Consumo.belongsTo(Cliente, { foreignKey: 'id_cliente' });
Cliente.hasMany(Consumo, { foreignKey: 'id_cliente' });

DetallePago.belongsTo(Consumo, { foreignKey: 'id_consumo' });
Consumo.hasMany(DetallePago, { foreignKey: 'id_consumo' });

DetallePago.belongsTo(Consumo, { foreignKey: 'producto_id' });
Cliente.hasMany(DetallePago, { foreignKey: 'producto_id' });

// Sincronizar la base de datos
db.sync()
  .then(() => {
    console.log('Modelos sincronizados correctamente');
  })
  .catch((error) => {
    console.error('Error al sincronizar modelos:', error);
  });

export { Cliente, Consumo, DetallePago, Preferencia };
