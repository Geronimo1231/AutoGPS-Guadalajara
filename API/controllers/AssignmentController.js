import Asignacion from '../models/Assignment.js';
import Vehiculo from '../models/Vehicle.js';
import Usuario from '../models/User.js';

export const getAsignaciones = async (req, res) => {
  try {
    const asignaciones = await Asignacion.findAll({
      include: [Usuario, Vehiculo],
    });
    res.json(asignaciones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const crearAsignacion = async (req, res) => {
  try {
    const { usuarioId, vehiculoId } = req.body;

    // Validar que vehículo esté disponible
    const vehiculo = await Vehiculo.findByPk(vehiculoId);
    if (!vehiculo || vehiculo.estado === 'asignado') {
      return res.status(400).json({ message: 'Vehículo no disponible para asignacion' });
    }

    const asignacion = await Asignacion.create({
      usuarioId,
      vehiculoId,
    });

    vehiculo.estado = 'asignado';
    await vehiculo.save();

    res.status(201).json(asignacion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const eliminarAsignacion = async (req, res) => {
  try {
    const { id } = req.params;
    const asignacion = await Asignacion.findByPk(id);
    if (!asignacion) return res.status(404).json({ message: 'Asignacion no encontrada' });

    // Liberar vehículo
    const vehiculo = await Vehiculo.findByPk(asignacion.vehiculoId);
    if (vehiculo) {
      vehiculo.estado = 'disponible';
      await vehiculo.save();
    }

    await asignacion.destroy();
    res.json({ message: 'Asignacion eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
