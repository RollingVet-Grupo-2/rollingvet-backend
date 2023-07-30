import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarUsuario = [
  check("email")
    .notEmpty()
    .withMessage("El email es un dato obligatorio")
    .isLength({ min: 3, max: 30 })
    .withMessage("El email debe tener entre 3 y 30 caracteres como maximo")
    .trim(),
  check("password")
    .notEmpty()
    .withMessage("El password es un dato obligatorio")
    .isLength({ min: 3, max: 80 })
    .withMessage("El email debe tener entre 3 y 30 caracteres como maximo")
    .trim(),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarUsuario;
