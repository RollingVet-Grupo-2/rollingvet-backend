import Turno from "../models/turno";

export const obtenerTurnos = async (req, res) => {
  try {
    const turnos = await Turno.find();
    res.status(200).json(turnos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los turnos",
    });
  }
};

export const crearTurno = async (req, res) => {
  try {
    const turnoNuevo = new Turno(req.body);
    await turnoNuevo.save();
    res.status(201).json({
      mensaje: "El turno se creo correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear el turno",
    });
  }
};

export const obtenerTurnoPorId = async (req, res) => {
  try {
    const turno = await Turno.findById(req.params.id);
    res.status(200).json(turno);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error no se encontro el turno",
    });
  }
};

export const borrarTurno = async (req, res) => {
  try {
    await Turno.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El turno fue eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error no se pudo eliminar el turno",
    });
  }
};

export const editarTurno = async (req, res) => {
  try {
    await Turno.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El turno fue editado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar editar el turno",
    });
  }
};
