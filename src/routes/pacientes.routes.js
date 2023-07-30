import { Router } from "express";
import {
  crearPaciente,
  obtenerPacientes,
  obtenerPacientePorId,
  borrarPaciente,
  editarPaciente,
} from "../controllers/pacientes.controllers";
import validarPaciente from "../helpers/validacionPaciente";

const router = Router();

router
  .route("/pacientes")
  .get(obtenerPacientes)
  .post(validarPaciente, crearPaciente);
router
  .route("/pacientes/:id")
  .get(obtenerPacientePorId)
  .delete(borrarPaciente)
  .put(validarPaciente, editarPaciente);

export default router;
