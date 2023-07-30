import { Router } from "express";
import {
  crearVeterinario,
  obtenerVeterinarios,
  obtenerVeterinarioPorId,
  borrarVeterinario,
  editarVeterinario,
} from "../controllers/veterinarios.controllers";
import validarVeterinario from "../helpers/validacionVeterinario";

const router = Router();

router
  .route("/veterinarios")
  .get(obtenerVeterinarios)
  .post(validarVeterinario, crearVeterinario);
router
  .route("/veterinarios/:id")
  .get(obtenerVeterinarioPorId)
  .delete(borrarVeterinario)
  .put(validarVeterinario, editarVeterinario);

export default router;
