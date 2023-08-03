import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarTurno = [
  check("veterinario")
    .notEmpty()
    .withMessage("El veterinario es un dato obligatorio")
    .isLength({ min: 3, max: 30 })
    .withMessage(
      "El veterinario debe tener entre 3 y 30 caracteres como maximo"
    )
    .trim(),
  check("paciente")
    .notEmpty()
    .withMessage("El paciente es un dato obligatorio"),
  check("detalle_cita")
    .notEmpty()
    .withMessage("El detalle de cita es un dato obligatorio")
    .trim(),
  check("fecha").notEmpty().withMessage("La fecha es un dato obligatorio"),
  check("horario")
    .notEmpty()
    .withMessage("El horario es un dato obligatorio")
    .isLength({ min: 3, max: 30 })
    .withMessage("El horario debe tener entre 3 y 30 caracteres como maximo."),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarTurno;
