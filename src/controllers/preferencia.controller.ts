import { Request, Response } from 'express';
import Preferencia from '../models/preferencia.model';

// Crear una nueva preferencia
export const crearPreferencia = async (req: Request, res: Response) => {
    try {
        const { clienteId, tipoPreferencia, valor } = req.body;
        if (!clienteId || !tipoPreferencia || !valor) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const nuevaPreferencia = await Preferencia.create({ clienteId, tipoPreferencia, valor });
        return res.status(201).json({ mensaje: 'Preferencia creada exitosamente', data: nuevaPreferencia });
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear la preferencia' });
    }
};

// Obtener todas las preferencias
export const obtenerPreferencias = async (req: Request, res: Response) => {
    try {
        const preferencias = await Preferencia.findAll();
        return res.status(200).json({ data: preferencias });
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener las preferencias' });
    }
};

// Obtener una preferencia por ID
export const obtenerPreferenciaPorId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const preferencia = await Preferencia.findByPk(id);

        if (!preferencia) {
            return res.status(404).json({ error: 'Preferencia no encontrada' });
        }

        return res.status(200).json({ data: preferencia });
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener la preferencia' });
    }
};

// Actualizar una preferencia
export const actualizarPreferencia = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { clienteId, tipoPreferencia, valor } = req.body;

        const preferencia = await Preferencia.findByPk(id);
        if (!preferencia) {
            return res.status(404).json({ error: 'Preferencia no encontrada' });
        }

        await preferencia.update({ clienteId, tipoPreferencia, valor });

        return res.status(200).json({ mensaje: 'Preferencia actualizada exitosamente', data: preferencia });
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar la preferencia' });
    }
};

// Eliminar una preferencia
export const eliminarPreferencia = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const preferencia = await Preferencia.findByPk(id);

        if (!preferencia) {
            return res.status(404).json({ error: 'Preferencia no encontrada' });
        }

        await preferencia.destroy();
        return res.status(200).json({ mensaje: 'Preferencia eliminada exitosamente' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar la preferencia' });
    }
};
