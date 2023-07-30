import { Router } from "express";
import {
  crearTurno,
  obtenerTurnos,
  obtenerTurnoPorId,
  borrarTurno,
  editarTurno,
} from "../controllers/turnos.controllers";
import validarTurno from "../helpers/validacionTurno";

const router = Router();

router.route("/turnos").get(obtenerTurnos).post(validarTurno, crearTurno);
router
  .route("/turnos/:id")
  .get(obtenerTurnoPorId)
  .delete(borrarTurno)
  .put(validarTurno, editarTurno);

export default router;
