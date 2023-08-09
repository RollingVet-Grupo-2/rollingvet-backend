import { Router } from "express";
import {
  crearPaciente,
  obtenerPacientes,
  obtenerPacientePorId,
  borrarPaciente,
  editarPaciente,
} from "../controllers/pacientes.controllers";
import validarPaciente from "../helpers/validacionPaciente";
import validarJWT from "../helpers/token-verify";

const router = Router();

router
  .route("/pacientes")
  .get(obtenerPacientes)
  .post([validarJWT, validarPaciente], crearPaciente);
router
  .route("/pacientes/:id")
  .get(obtenerPacientePorId)
  .delete(validarJWT, borrarPaciente)
  .put([validarJWT, validarPaciente], editarPaciente);

export default router;
