import { Request, Response } from 'express';
import Cliente from '../models/cliente.model';

// Crear un nuevo cliente
export const crearCliente = async (req: Request, res: Response) => {
    try {
        const { nombre, apellido, cedula, direccion, telefono } = req.body;
        if (!nombre || !apellido || !cedula || !direccion || !telefono) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }
        
        const clienteExistente = await Cliente.findOne({ where: { cedula } });
        if (clienteExistente) {
            return res.status(409).json({ error: 'El cliente ya está registrado' });
        }

        const nuevoCliente = await Cliente.create({ nombre, apellido, cedula, direccion, telefono });
        return res.status(201).json({ mensaje: 'Cliente creado exitosamente', data: nuevoCliente });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error al crear el cliente:', error.message);
            return res.status(500).json({ error: 'Error al crear el cliente', detalle: error.message });
        } else {
            console.error('Error desconocido al crear el cliente');
            return res.status(500).json({ error: 'Error al crear el cliente', detalle: 'Error desconocido' });
        }
    }
};

// Obtener todos los clientes
export const obtenerClientes = async (req: Request, res: Response) => {
    try {
        const clientes = await Cliente.findAll();
        return res.status(200).json({ data: clientes });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error al obtener los clientes:', error.message);
            return res.status(500).json({ error: 'Error al obtener los clientes', detalle: error.message });
        } else {
            console.error('Error desconocido al obtener los clientes');
            return res.status(500).json({ error: 'Error al obtener los clientes', detalle: 'Error desconocido' });
        }
    }
};

// Obtener un cliente por ID
export const obtenerClientePorId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByPk(id);

        if (!cliente) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }

        return res.status(200).json({ data: cliente });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error al obtener el cliente:', error.message);
            return res.status(500).json({ error: 'Error al obtener el cliente', detalle: error.message });
        } else {
            console.error('Error desconocido al obtener el cliente');
            return res.status(500).json({ error: 'Error al obtener el cliente', detalle: 'Error desconocido' });
        }
    }
};

// Actualizar un cliente
export const actualizarCliente = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, cedula, direccion, telefono } = req.body;

        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }

        await cliente.update({ nombre, apellido, cedula, direccion, telefono });

        return res.status(200).json({ mensaje: 'Cliente actualizado exitosamente', data: cliente });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error al actualizar el cliente:', error.message);
            return res.status(500).json({ error: 'Error al actualizar el cliente', detalle: error.message });
        } else {
            console.error('Error desconocido al actualizar el cliente');
            return res.status(500).json({ error: 'Error al actualizar el cliente', detalle: 'Error desconocido' });
        }
    }
};

// Eliminar un cliente
export const eliminarCliente = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByPk(id);

        if (!cliente) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }

        await cliente.destroy();
        return res.status(200).json({ mensaje: 'Cliente eliminado exitosamente' });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error al eliminar el cliente:', error.message);
            return res.status(500).json({ error: 'Error al eliminar el cliente', detalle: error.message });
        } else {
            console.error('Error desconocido al eliminar el cliente');
            return res.status(500).json({ error: 'Error al eliminar el cliente', detalle: 'Error desconocido' });
        }
    }
};
