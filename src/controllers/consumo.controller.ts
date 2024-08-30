import { Request, Response } from 'express';
import Consumo from '../models/consumo.model';

// Crear un nuevo consumo
export const crearConsumo = async (req: Request, res: Response) => {
    try {
        const { clienteId, descripcion, monto } = req.body;
        if (!clienteId || !descripcion || !monto) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const nuevoConsumo = await Consumo.create({ clienteId, descripcion, monto });
        return res.status(201).json({ mensaje: 'Consumo creado exitosamente', data: nuevoConsumo });
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear el consumo' });
    }
};

// Obtener todos los consumos
export const obtenerConsumos = async (req: Request, res: Response) => {
    try {
        const consumos = await Consumo.findAll();
        return res.status(200).json({ data: consumos });
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener los consumos' });
    }
};

// Obtener un consumo por ID
export const obtenerConsumoPorId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const consumo = await Consumo.findByPk(id);

        if (!consumo) {
            return res.status(404).json({ error: 'Consumo no encontrado' });
        }

        return res.status(200).json({ data: consumo });
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener el consumo' });
    }
};

// Actualizar un consumo
export const actualizarConsumo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { clienteId, descripcion, monto } = req.body;

        const consumo = await Consumo.findByPk(id);
        if (!consumo) {
            return res.status(404).json({ error: 'Consumo no encontrado' });
        }

        await consumo.update({ clienteId, descripcion, monto });

        return res.status(200).json({ mensaje: 'Consumo actualizado exitosamente', data: consumo });
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el consumo' });
    }
};

// Eliminar un consumo
export const eliminarConsumo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const consumo = await Consumo.findByPk(id);

        if (!consumo) {
            return res.status(404).json({ error: 'Consumo no encontrado' });
        }

        await consumo.destroy();
        return res.status(200).json({ mensaje: 'Consumo eliminado exitosamente' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar el consumo' });
    }
};
