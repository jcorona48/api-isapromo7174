import { filter } from "../helpers/Filter.js";
import Anecdota from "../models/Anecdota.js";

// Obtener un usuario por su id
export const getAnecdota = async (req, res) => {
    const query = filter(req.body); // Obtener el query de filtrado

    const anecdotas = await Anecdota.find(query); // Buscar usuarios en la base de datos

    res.json(anecdotas); // Retornar los usuarios
};

// Obtener un usuario por su id
export const getAnecdotaById = async (req, res) => {
    const { id } = req.params; // Obtener el id de los parámetros de la ruta

    const anecdota = await Anecdota.findById(id); // Buscar usuario por id en la base de datos

    if (!anecdota)
        return res.status(404).json({ mensaje: "Anecdota no encontrada" }); // Si no existe el usuario, retornar un error

    res.json(anecdota); // Retornar el usuario
};


// Crear un usuario

export const createAnecdota = async (req, res) => {
    const { body } = req; // Obtener el body de la petición

    try {
        const anecdota = await new Anecdota(body); // Crear un usuario en memoria

        await anecdota.save(); // Guardar usuario en la base de datos

        res.json(anecdota); // Retornar el usuario
    } catch (error) {
        res.status(500).json(error); // Retornar el error
    }
};

// Actualizar un usuario por su id

export const updateAnecdotaById = async (req, res) => {
    const { id } = req.params; // Obtener el id de los parámetros de la ruta

    const { body } = req; // Obtener el body de la petición

    try {
        const anecdotaUpdated = await Anecdota.findByIdAndUpdate(id, body, {
            new: true,
        }); // Buscar y actualizar usuario por id en la base de datos

        if (!anecdotaUpdated)
            return res.status(404).json({ mensaje: "Anecdota no encontrada" }); // Si no existe el usuario, retornar un error

        res.json(anecdotaUpdated); // Retornar el usuario actualizado
    } catch (error) {
        res.status(500).json(error); // Retornar el error
    }
};

// Eliminar un usuario por su id

export const deleteAnecdotaById = async (req, res) => {
    const { id } = req.params; // Obtener el id de los parámetros de la ruta

    try {
        const anecdotaDeleted = await Anecdota.findByIdAndDelete(id); // Buscar y eliminar usuario por id en la base de datos

        if (!anecdotaDeleted)
            return res.status(404).json({ mensaje: "Anecdota no encontrada" }); // Si no existe el usuario, retornar un error

        res.json(anecdotaDeleted); // Retornar el usuario eliminado
    } catch (error) {
        res.status(500).json(error); // Retornar el error
    }
};
