import { check, body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarPaciente = [
  check("nombre")
    .notEmpty()
    .withMessage("El nombre es un dato obligatorio")
    .isLength({ min: 3, max: 30 })
    .withMessage(
      "El nombre del paciente debe tener entre 3 y 30 caracteres como maximo"
    )
    .trim(),
  check("email")
    .notEmpty()
    .withMessage("El email es un dato obligatorio")
    .matches(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    )
    .withMessage(
      "El formato del correo electronico debe ser válido. Ej: mail@dominio.com"
    )
    .trim(),
  check("telefono")
    .notEmpty()
    .withMessage("El telefono es un dato obligatorio")
    .isLength({ min: 10, max: 10 })
    .withMessage("El telefono debe tener unicamente 10 digitos.")
    .matches(/^[0-9]{10}$/)
    .withMessage(
      "El formato del número de telefono debe ser válido. Ej: 3812334455"
    )
    .trim(),
  check("direccion")
    .notEmpty()
    .withMessage("La direccion es un dato obligatorio")
    .isLength({ min: 3, max: 30 })
    .withMessage("El telefono debe tener unicamente 10 digitos.")
    .trim(),
  body("mascotas")
    .isArray({ min: 1 })
    .withMessage("Debe haber al menos una mascota registrada"),

  body("mascotas.*.nombre")
    .notEmpty()
    .withMessage("El nombre de la mascota es un dato obligatorio")
    .isLength({ min: 3, max: 30 })
    .withMessage(
      "El nombre de la mascota debe tener entre 3 y 30 caracteres como máximo"
    ),

  body("mascotas.*.edad")
    .notEmpty()
    .withMessage("La edad de la mascota es un dato obligatorio"),

  body("mascotas.*.especie")
    .notEmpty()
    .withMessage("La especie de la mascota es un dato obligatorio")
    .isLength({ min: 3, max: 30 })
    .withMessage(
      "La especie de la mascota debe tener entre 3 y 30 caracteres como máximo"
    ),

  body("mascotas.*.raza")
    .notEmpty()
    .withMessage("La raza de la mascota es un dato obligatorio")
    .isLength({ min: 3, max: 30 })
    .withMessage(
      "La raza de la mascota debe tener entre 3 y 30 caracteres como máximo"
    ),

  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarPaciente;
