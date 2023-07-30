import { check, body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarVeterinario = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es un dato obligatorio")
    .isLength({ min: 3, max: 30 })
    .withMessage(
      "El nombre del veterinario debe tener entre 3 y 30 caracteres como maximo"
    )
    .trim(),
  body("servicios")
    .isArray({ min: 1 })
    .withMessage(
      "Los servicios son obligatorios. Debe haber al menos un servicio registrado"
    ),
  body("horarios")
    .isArray({ min: 1 })
    .withMessage(
      "Los horarios son obligatorios. Debe haber al menos un servicio registrado"
    ),
  body("experiencia")
    .notEmpty()
    .withMessage("La experiencia es un dato obligatorio")
    .isLength({ min: 3, max: 30 })
    .withMessage(
      "La experiencia del veterinario debe tener entre 3 y 30 caracteres como maximo"
    )
    .trim(),

  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarVeterinario;
