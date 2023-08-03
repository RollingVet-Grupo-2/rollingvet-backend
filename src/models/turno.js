import { Schema, model } from "mongoose";

const turnoSchema = new Schema({
  veterinario: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
  paciente: {type: Schema.Types.ObjectId, ref: "paciente"},
  detalle_cita: {
    type: String,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
  horario: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
  },
});

const Turno = model("turno", turnoSchema);

export default Turno;
