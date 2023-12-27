import express from "express";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import { userRoutes } from "./routes/index.js";
import { eventRoutes } from "./routes/index.js";
import { anecdotaRoutes } from "./routes/index.js";
import { connectDB } from "./utils/db.js";
import { PORT } from "./config/env.config.js";
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/upload/",
    })
);

// Rutas
app.use("/user", userRoutes);
app.use("/event", eventRoutes);

// Conectar a la base de datos
connectDB();

// Iniciar Servidor
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
