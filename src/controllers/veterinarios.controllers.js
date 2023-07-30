import Veterinario from "../models/veterinario";

export const obtenerVeterinarios = async (req, res) => {
  try {
    const veterinarios = await Veterinario.find();
    res.status(200).json(veterinarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los veterinarios",
    });
  }
};

export const crearVeterinario = async (req, res) => {
  try {
    const veterinarioNuevo = new Veterinario(req.body);
    await veterinarioNuevo.save();
    res.status(201).json({
      mensaje: "El veterinario se creo correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear el veterinario",
    });
  }
};

export const obtenerVeterinarioPorId = async (req, res) => {
  try {
    const veterinario = await Veterinario.findById(req.params.id);
    res.status(200).json(veterinario);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error no se encontro el veterinario",
    });
  }
};

export const borrarVeterinario = async (req, res) => {
  try {
    await Veterinario.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El veterinario fue eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error no se pudo eliminar el veterinario",
    });
  }
};

export const editarVeterinario = async (req, res) => {
  try {
    await Veterinario.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El veterinario fue editado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar editar el veterinario",
    });
  }
};
