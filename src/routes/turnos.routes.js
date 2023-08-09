import { Router } from "express";
import {
  crearTurno,
  obtenerTurnos,
  obtenerTurnoPorId,
  borrarTurno,
  editarTurno,
} from "../controllers/turnos.controllers";
import validarTurno from "../helpers/validacionTurno";
import validarJWT from "../helpers/token-verify";

const router = Router();

router
  .route("/turnos")
  .get(obtenerTurnos)
  .post([validarJWT, validarTurno], crearTurno);
router
  .route("/turnos/:id")
  .get(obtenerTurnoPorId)
  .delete(validarJWT, borrarTurno)
  .put([validarJWT, validarTurno], editarTurno);

export default router;
