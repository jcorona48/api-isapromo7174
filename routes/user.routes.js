import { Router } from "express";
import {
    getUserById,
    getUsers,
    updateUserById,
    deleteUserById,
} from "../controllers/user.controllers.js";

// Manejo de rutas de usuario
// Todas las rutas de usuario empiezan con /user

const router = Router();
// Ruta para obtener usuario
// GET /user/:id
router.get("/:id", getUserById);

// Ruta para obtener usuarios
// GET /user/all
router.get("/all", getUsers);

// Ruta para actualizar usuario
// PUT /user/:id
router.put("/:id", updateUserById);

// Ruta para eliminar usuario
// DELETE /user/:id
router.delete("/:id", deleteUserById);

export default router;
