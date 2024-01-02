import { filter } from "../helpers/Filter.js";
import Role from "../models/Role.js";

// Obtener un usuario por su id
export const getRoles = async (req, res) => {
    const roles = await Role.find(); // Buscar usuarios en la base de datos

    return res.json(roles); // Retornar los usuarios
};

// Obtener un usuario por su id
export const getRoleById = async (req, res) => {
    const { id } = req.params; // Obtener el id de los parámetros de la ruta

    const role = await Role.findById(id); // Buscar usuario por id en la base de datos

    if (!role) return res.status(404).json({ mensaje: "Rol no encontrado" }); // Si no existe el usuario, retornar un error

    return res.json(role); // Retornar el usuario
};

// Crear un usuario

export const createRole = async (req, res) => {
    const { body } = req; // Obtener el body de la petición

    try {
        const role = await new Role(body); // Crear un usuario en memoria

        await role.save(); // Guardar usuario en la base de datos

        return res.json(role); // Retornar el usuario
    } catch (error) {
        return res.status(500).json(error); // Retornar el error
    }
};

// Actualizar un usuario por su id

export const updateRoleById = async (req, res) => {
    const { id } = req.params; // Obtener el id de los parámetros de la ruta

    const { body } = req; // Obtener el body de la petición

    try {
        const roleUpdated = await Role.findByIdAndUpdate(id, body, {
            new: true,
        }); // Buscar y actualizar usuario por id en la base de datos

        if (!roleUpdated)
            return res.status(404).json({ mensaje: "Rol no encontrado" }); // Si no existe el usuario, retornar un error

        return res.json(roleUpdated); // Retornar el usuario actualizado
    } catch (error) {
        return res.status(500).json(error); // Retornar el error
    }
};

// Eliminar un usuario por su id

export const deleteRoleById = async (req, res) => {
    const { id } = req.params; // Obtener el id de los parámetros de la ruta

    try {
        const roleDeleted = await Role.findByIdAndDelete(id); // Buscar y eliminar usuario por id en la base de datos

        if (!roleDeleted)
            return res.status(404).json({ mensaje: "Rol no encontrado" }); // Si no existe el usuario, retornar un error

        return res.json(roleDeleted); // Retornar el usuario eliminado
    } catch (error) {
        return res.status(500).json(error); // Retornar el error
    }
};
