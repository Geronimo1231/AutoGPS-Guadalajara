import Vehiculo from '../models/vehiculo.js';

export const getVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculo.findAll();
    res.json(vehiculos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const crearVehiculo = async (req, res) => {
  try {
    const { marca, modelo, año, estado, tipo, imagen } = req.body;

    const vehiculo = await Vehiculo.create({
      marca,
      modelo,
      año,
      estado,
      tipo,
      imagen,
    });

    res.status(201).json(vehiculo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editarVehiculo = async (req, res) => {
  try {
    const { id } = req.params;
    const { marca, modelo, año, estado, tipo, imagen } = req.body;

    const vehiculo = await Vehiculo.findByPk(id);
    if (!vehiculo) return res.status(404).json({ message: 'Vehículo no encontrado' });

    vehiculo.marca = marca || vehiculo.marca;
    vehiculo.modelo = modelo || vehiculo.modelo;
    vehiculo.año = año || vehiculo.año;
    vehiculo.estado = estado || vehiculo.estado;
    vehiculo.tipo = tipo || vehiculo.tipo;
    vehiculo.imagen = imagen || vehiculo.imagen;

    await vehiculo.save();
    res.json(vehiculo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const eliminarVehiculo = async (req, res) => {
  try {
    const { id } = req.params;
    const vehiculo = await Vehiculo.findByPk(id);
    if (!vehiculo) return res.status(404).json({ message: 'Vehículo no encontrado' });

    await vehiculo.destroy();
    res.json({ message: 'Vehículo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
