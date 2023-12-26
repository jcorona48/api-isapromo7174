import User from "../models/User.js";
import { filter } from "../helpers/Filter.js";
import { generateToken } from "../utils/jwt.js";

// Obtener un usuario por su id
export const getUsers = async (req, res) => {
    const query = filter(req.body); // Obtener el query de filtrado

    const users = await User.find(query); // Buscar usuarios en la base de datos

    res.json(users); // Retornar los usuarios
};

// Obtener un usuario por su id

export const getUserById = async (req, res) => {
    const { id } = req.params; // Obtener el id de los parámetros de la ruta

    const user = await User.findById(id); // Buscar usuario por id en la base de datos

    if (!user)
        return res.status(404).json({ mensaje: "Usuario no encontrado" }); // Si no existe el usuario, retornar un error

    res.json(user); // Retornar el usuario
};

// Crear un usuario

export const createUser = async (req, res) => {
    const { body } = req; // Obtener el body de la petición

    try {
        const user = await new User(body); // Crear un usuario en memoria

        user.password = await User.encryptPassword(user.password); // Cifrar la contraseña

        await user.save(); // Guardar usuario en la base de datos

        res.json(user); // Retornar el usuario
    } catch (error) {
        res.status(500).json(error); // Retornar el error
    }
};

// Actualizar un usuario por su id

export const updateUserById = async (req, res) => {
    const { id } = req.params; // Obtener el id de los parámetros de la ruta

    const { body } = req; // Obtener el body de la petición

    try {
        const userUpdated = await User.findByIdAndUpdate(id, body, {
            new: true,
        }); // Buscar y actualizar usuario por id en la base de datos

        if (!userUpdated)
            return res.status(404).json({ mensaje: "Usuario no encontrado" }); // Si no existe el usuario, retornar un error

        res.json(userUpdated); // Retornar el usuario actualizado
    } catch (error) {
        res.status(500).json(error); // Retornar el error
    }
};

// Eliminar un usuario por su id

export const deleteUserById = async (req, res) => {
    const { id } = req.params; // Obtener el id de los parámetros de la ruta

    try {
        const userDeleted = await User.findByIdAndDelete(id); // Buscar y eliminar usuario por id en la base de datos

        if (!userDeleted)
            return res.status(404).json({ mensaje: "Usuario no encontrado" }); // Si no existe el usuario, retornar un error

        res.json(userDeleted); // Retornar el usuario eliminado
    } catch (error) {
        res.status(500).json(error); // Retornar el error
    }
};

// Login de usuario

export const login = async (req, res) => {
    const { correo, password } = req.body; // Obtener correo y contraseña del body

    const user = await User.findOne({ correo }).populate("rol"); // Buscar usuario por correo en la base de datos

    if (!user)
        return res.status(404).json({ mensaje: "Usuario no encontrado" }); // Si no existe el usuario, retornar un error

    const matchPassword = await User.comparePassword(password); // Comparar contraseña encriptada

    if (!matchPassword)
        return res.status(401).json({ mensaje: "Contraseña incorrecta" }); // Si la contraseña es incorrecta, retornar un error

    const token = generateToken(user); // Generar token

    res.json({ user, token }); // Retornar usuario y token
};

export const getUserByToken = async (req, res) => {
    const { id } = req.user; // Obtener el id del usuario del token

    const user = await User.findById(id); // Buscar usuario por id en la base de datos

    if (!user)
        return res.status(404).json({ mensaje: "Usuario no encontrado" }); // Si no existe el usuario, retornar un error

    res.json(user); // Retornar el usuario
};
