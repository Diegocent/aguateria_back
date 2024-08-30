import { Request, Response } from 'express';
import DetallePago from '../models/detallepago.model';

// Crear un nuevo detalle de pago
export const crearDetallePago = async (req: Request, res: Response) => {
    try {
        const { consumoId, fechaPago, montoPago } = req.body;
        if (!consumoId || !fechaPago || !montoPago) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const nuevoDetallePago = await DetallePago.create({ consumoId, fechaPago, montoPago });
        return res.status(201).json({ mensaje: 'Detalle de pago creado exitosamente', data: nuevoDetallePago });
    } catch (error) {
        return res.status(500).json({ error: 'Error al crear el detalle de pago' });
    }
};

// Obtener todos los detalles de pago
export const obtenerDetallesPago = async (req: Request, res: Response) => {
    try {
        const detallesPago = await DetallePago.findAll();
        return res.status(200).json({ data: detallesPago });
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener los detalles de pago' });
    }
};

// Obtener un detalle de pago por ID
export const obtenerDetallePagoPorId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const detallePago = await DetallePago.findByPk(id);

        if (!detallePago) {
            return res.status(404).json({ error: 'Detalle de pago no encontrado' });
        }

        return res.status(200).json({ data: detallePago });
    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener el detalle de pago' });
    }
};

// Actualizar un detalle de pago
export const actualizarDetallePago = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { consumoId, fechaPago, montoPago } = req.body;

        const detallePago = await DetallePago.findByPk(id);
        if (!detallePago) {
            return res.status(404).json({ error: 'Detalle de pago no encontrado' });
        }

        await detallePago.update({ consumoId, fechaPago, montoPago });

        return res.status(200).json({ mensaje: 'Detalle de pago actualizado exitosamente', data: detallePago });
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el detalle de pago' });
    }
};

// Eliminar un detalle de pago
export const eliminarDetallePago = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const detallePago = await DetallePago.findByPk(id);

        if (!detallePago) {
            return res.status(404).json({ error: 'Detalle de pago no encontrado' });
        }

        await detallePago.destroy();
        return res.status(200).json({ mensaje: 'Detalle de pago eliminado exitosamente' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar el detalle de pago' });
    }
};
