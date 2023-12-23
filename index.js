import express from "express";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import { userRoutes } from "./routes/index.js";
import { connectDB } from "./utils/db.js";
const app = express();

// Configuración
const PORT = process.env.PORT || 3000;

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

// Conectar a la base de datos
connectDB();

// Iniciar Servidor
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
