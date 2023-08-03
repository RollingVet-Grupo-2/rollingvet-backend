import Paciente from "../models/paciente";
import Turno from "../models/turno";

export const obtenerPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.status(200).json(pacientes);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los pacientes",
    });
  }
};

export const crearPaciente = async (req, res) => {
  try {
    const pacienteNuevo = new Paciente(req.body);
    await pacienteNuevo.save();
    res.status(201).json({
      mensaje: "El paciente se creo correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear el paciente",
    });
  }
};

export const obtenerPacientePorId = async (req, res) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    res.status(200).json(paciente);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error no se encontro el paciente",
    });
  }
};

export const borrarPaciente = async (req, res) => {
  try {
    await Paciente.findByIdAndDelete(req.params.id);
    const turnosAsociados = await Turno.find({ paciente: req.params.id });
    if (turnosAsociados.length > 0) {
      turnosAsociados.map(
        async (turno) => await Turno.findByIdAndDelete(turno._id)
      );
    }
    res.status(200).json({
      mensaje: "El paciente fue eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error no se pudo eliminar el paciente",
    });
  }
};

export const editarPaciente = async (req, res) => {
  try {
    await Paciente.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El paciente fue editado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar editar el paciente",
    });
  }
};
