import { Schema, model } from "mongoose";

const veterinarioSchema = new Schema({
  nombre: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
  servicios: {
    type: [String],
    required: true,
  },
  horarios: {
    type: [String],
    required: true,
  },
  experiencia: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
});

const Veterinario = model("veterinario", veterinarioSchema);

export default Veterinario;
