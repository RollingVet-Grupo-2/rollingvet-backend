import { Router } from "express";
import {
  crearPaciente,
  obtenerPacientes,
  obtenerPacientePorId,
  borrarPaciente,
  editarPaciente,
} from "../controllers/pacientes.controllers";

const router = Router();

router.route("/pacientes").get(obtenerPacientes).post(crearPaciente);
router
  .route("/pacientes/:id")
  .get(obtenerPacientePorId)
  .delete(borrarPaciente)
  .put(editarPaciente);

export default router;
