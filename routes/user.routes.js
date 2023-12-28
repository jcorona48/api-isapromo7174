import { Router } from "express";
import {
    getUserById,
    getUsers,
    updateUserById,
    deleteUserById,
    createUser,
    login,
    getUserByToken,
} from "../controllers/user.controllers.js";
import { authMiddleware } from "../middlewares/auth.js";

// Manejo de rutas de usuario
// Todas las rutas de usuario empiezan con /user

const router = Router();
// Ruta para obtener usuario
// GET /user/:id
router.get("/:id", getUserById);

// Ruta para obtener usuarios
// GET /user/all
router.get("/", getUsers);

// Ruta para actualizar usuario
// PUT /user/:id
router.put("/:id", [authMiddleware], updateUserById);

// Ruta para eliminar usuario
// DELETE /user/:id
router.delete("/:id", [authMiddleware], deleteUserById);

// Ruta para crear usuario
// POST /user
router.post("/", /* [authMiddleware], */ createUser);

// Ruta para iniciar sesión
// POST /user/login
router.post("/login", login);

// Ruta para obtener usuario por token
// GET /user/token
router.post("/token", [authMiddleware], getUserByToken);

export default router;
