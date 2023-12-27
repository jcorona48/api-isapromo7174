import { Router } from "express";
import {
    getAnecdotaById,
    getAnecdota,
    updateAnecdotaById,
    deleteAnecdotaById,
    createAnecdota,
} from "../controllers/anecdota.controllers.js";
import { authMiddleware, verifyAdmin } from "../middlewares/auth.js";

// Manejo de rutas de Evento
// Todas las rutas de Evento empiezan con /event

const router = Router();
// Ruta para obtener Evento
// GET /event/:id
router.get("/:id", getAnecdotaById);

// Ruta para obtener Eventos
// GET /event/all
router.get("/all", getAnecdota);

// Ruta para actualizar Evento
// PUT /event/:id
router.put("/:id", [authMiddleware, verifyAdmin], updateAnecdotaById);

// Ruta para eliminar Evento
// DELETE /event/:id
router.delete("/:id", [authMiddleware, verifyAdmin], deleteAnecdotaById);

// Ruta para crear Evento
// POST /event
router.post("/", [authMiddleware, verifyAdmin], createAnecdota);

export default router;
