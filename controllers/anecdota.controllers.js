import { filter } from "../helpers/Filter.js";
import Anecdota from "../models/Anecdota.js";

// Obtener todas las anecdotas
export const getAnecdota = async (req, res) => {
    const anecdotas = await Anecdota.find().populate("usuario"); // Buscar anecdotas en la base de datos

    return res.json(anecdotas); // Retornar los anecdotas
};

// Obtener un anecdota por su id
export const getAnecdotaById = async (req, res) => {
    const { id } = req.params; // Obtener el id de los parámetros de la ruta

    const anecdota = await Anecdota.findById(id).populate("usuario"); // Buscar anecdota por id en la base de datos

    if (!anecdota)
        return res.status(404).json({ mensaje: "Anecdota no encontrada" }); // Si no existe el anecdota, retornar un error

    return res.json(anecdota); // Retornar el anecdota
};

// Crear un anecdota

export const createAnecdota = async (req, res) => {
    const { body } = req; // Obtener el body de la petición

    try {
        const anecdota = await new Anecdota(body); // Crear un anecdota en memoria

        await anecdota.save(); // Guardar anecdota en la base de datos

        return res.json(anecdota); // Retornar el anecdota
    } catch (error) {
        return res.status(500).json(error); // Retornar el error
    }
};

// Actualizar un anecdota por su id

export const updateAnecdotaById = async (req, res) => {
    const { id } = req.params; // Obtener el id de los parámetros de la ruta

    const { body } = req; // Obtener el body de la petición

    try {
        const anecdotaUpdated = await Anecdota.findByIdAndUpdate(id, body, {
            new: true,
        }); // Buscar y actualizar anecdota por id en la base de datos

        if (!anecdotaUpdated)
            return res.status(404).json({ mensaje: "Anecdota no encontrada" }); // Si no existe el anecdota, retornar un error

        return res.json(anecdotaUpdated); // Retornar el anecdota actualizado
    } catch (error) {
        return res.status(500).json(error); // Retornar el error
    }
};

// Eliminar un anecdota por su id

export const deleteAnecdotaById = async (req, res) => {
    const { id } = req.params; // Obtener el id de los parámetros de la ruta

    try {
        const anecdotaDeleted = await Anecdota.findByIdAndDelete(id); // Buscar y eliminar anecdota por id en la base de datos

        if (!anecdotaDeleted)
            return res.status(404).json({ mensaje: "Anecdota no encontrada" }); // Si no existe el anecdota, retornar un error

        return res.json(anecdotaDeleted); // Retornar el anecdota eliminado
    } catch (error) {
        return res.status(500).json(error); // Retornar el error
    }
};
