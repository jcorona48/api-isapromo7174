import { Router } from "express";
import {
    getEventById,
    getEvent,
    updateEventById,
    deleteEventById,
} from "../controllers/event.controllers.js";

// Manejo de rutas de usuario
// Todas las rutas de usuario empiezan con /user

const router = Router();
// Ruta para obtener usuario
// GET /user/:id
router.get("/:id", getEventById);

// Ruta para obtener usuarios
// GET /user/all
router.get("/all", getEvent);

// Ruta para actualizar usuario
// PUT /user/:id
router.put("/:id", updateEventById);

// Ruta para eliminar usuario
// DELETE /user/:id
router.delete("/:id", deleteEventById);

export default router;
