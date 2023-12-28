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
    console.log(req.files);
    const { foto } = req.files;
    if (req.files) {
        const result = await upload(foto.tempFilePath);

        console.log(result);
    }

    await fs.unlinkSync(foto.tempFilePath);

    res.send("Hello World!");
});
// Conectar a la base de datos
connectDB();

// Iniciar Servidor
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
