import express from "express";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import cors from "cors";
import {
    userRoutes,
    eventRoutes,
    anecdotaRoutes,
    roleRoutes,
} from "./routes/index.js";
import { connectDB } from "./utils/db.js";
import { PORT } from "./config/env.config.js";
import fs from "fs";
import { upload } from "./utils/cloudinary.js";
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "./upload",
    })
);

// Rutas
app.use("/user", userRoutes);
app.use("/event", eventRoutes);
app.use("/anecdota", anecdotaRoutes);
app.use("/role", roleRoutes);

app.post("/", async (req, res) => {
    const data = req.body;
    const files = req.files;
    console.log(data);
    /*   if (!files?.foto) res.status(400).send("No hay archivos"); */

    const { foto } = files;
    const result = await upload(foto.tempFilePath);

    console.log(result.secure_url);

    fs.unlinkSync(foto.tempFilePath);

    res.json({
        ...data,
        foto: result,
    });
});

app.get("/", (req, res) => {
    res.send("Hola Mundo");
});
// Conectar a la base de datos
connectDB();

// Iniciar Servidor
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
