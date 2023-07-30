import { Router } from "express";
import {
  crearUsuario,
  login,
  obtenerUsuarioPorId,
  obtenerUsuarios,
} from "../controllers/usuarios.controllers";
import validarUsuario from "../helpers/validacionUsuario";

const router = Router();
router.route("/usuario").get(obtenerUsuarios).post(validarUsuario,login);
router.route("/usuarioNuevo").post(validarUsuario,crearUsuario);
router.route("/usuario/:id").get(obtenerUsuarioPorId);

export default router;
