import { Schema, model } from "mongoose";

const pacienteSchema = new Schema({
  nombre: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
  nombreMascota: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
  edadMascota: {
    type: String,
    required: true,
  },
  especie: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
  raza: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
});

const Paciente = model("paciente", pacienteSchema);

export default Paciente;
