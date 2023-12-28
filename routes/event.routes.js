import { Router } from "express";
import {
    getEventById,
    getEvent,
    updateEventById,
    deleteEventById,
    createEvent,
} from "../controllers/event.controllers.js";
import { authMiddleware, verifyAdmin } from "../middlewares/auth.js";

// Manejo de rutas de Evento
// Todas las rutas de Evento empiezan con /event

const router = Router();
// Ruta para obtener Evento
// GET /event/:id
router.get("/:id", getEventById);

// Ruta para obtener Eventos
// GET /event/all
router.get("/", getEvent);

// Ruta para actualizar Evento
// PUT /event/:id
router.put("/:id", [authMiddleware, verifyAdmin], updateEventById);

// Ruta para eliminar Evento
// DELETE /event/:id
router.delete("/:id", [authMiddleware, verifyAdmin], deleteEventById);

// Ruta para crear Evento
// POST /event
router.post("/", [authMiddleware, verifyAdmin], createEvent);

export default router;
