import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import "dotenv/config";
import "./src/database/dbConnection";
import pacientesRouter from "./src/routes/pacientes.routes";
import veterinariosRouter from "./src/routes/veterinarios.routes";
import turnosRouter from "./src/routes/turnos.routes";

// Puerto

const app = express();

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
console.log(__dirname);
app.use(express.static(path.join(__dirname, "/public")));

// Rutas
app.use("/api-rollingvet", pacientesRouter);
app.use("/api-rollingvet", veterinariosRouter);
app.use("/api-rollingvet", turnosRouter);
