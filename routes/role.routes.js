import { Router } from "express";
import {
    getRoleById,
    getRoles,
    updateRoleById,
    deleteRoleById,
    createRole,
} from "../controllers/role.controllers.js";
import { authMiddleware } from "../middlewares/auth.js";

// Manejo de rutas de usuario
// Todas las rutas de usuario empiezan con /Role

const router = Router();
// Ruta para obtener usuario
// GET /Role/:id
router.get("/:id", getRoleById);

// Ruta para obtener usuarios
// GET /Role/all
router.get("/", getRoles);

// Ruta para actualizar usuario
// PUT /Role/:id
router.put("/:id", [authMiddleware], updateRoleById);

// Ruta para eliminar usuario
// DELETE /Role/:id
router.delete("/:id", [authMiddleware], deleteRoleById);

// Ruta para crear usuario
// POST /Role
router.post("/", /* [authMiddleware], */ createRole);

export default router;
