import Event from "../models/Event.js";
import { filter } from "../helpers/Filter.js";

// Obtener un usuario por su id
export const getEvent = async (req, res) => {
    const query = filter(req.body); // Obtener el query de filtrado

    const events = await Event.find(query); // Buscar usuarios en la base de datos

    return res.json(events); // Retornar los usuarios
};

// Obtener un usuario por su id
export const getEventById = async (req, res) => {
    const { id } = req.params; // Obtener el id de los parámetros de la ruta

    const event = await Event.findById(id); // Buscar usuario por id en la base de datos

    if (!event)
        return res.status(404).json({ mensaje: "Usuario no encontrado" }); // Si no existe el usuario, retornar un error

    return res.json(event); // Retornar el usuario
};

// Crear un usuario

export const createEvent = async (req, res) => {
    const { body } = req; // Obtener el body de la petición

    try {
        const event = await new Event(body); // Crear un usuario en memoria

        await event.save(); // Guardar usuario en la base de datos

        return res.json(event); // Retornar el usuario
    } catch (error) {
        return res.status(500).json(error); // Retornar el error
    }
};

// Actualizar un usuario por su id

export const updateEventById = async (req, res) => {
    const { id } = req.params; // Obtener el id de los parámetros de la ruta

    const { body } = req; // Obtener el body de la petición

    try {
        const eventUpdated = await Event.findByIdAndUpdate(id, body, {
            new: true,
        }); // Buscar y actualizar usuario por id en la base de datos

        if (!eventUpdated)
            return res.status(404).json({ mensaje: "Evento no encontrado" }); // Si no existe el usuario, retornar un error

        return res.json(eventUpdated); // Retornar el usuario actualizado
    } catch (error) {
        return res.status(500).json(error); // Retornar el error
    }
};

// Eliminar un usuario por su id

export const deleteEventById = async (req, res) => {
    const { id } = req.params; // Obtener el id de los parámetros de la ruta

    try {
        const eventDeleted = await Event.findByIdAndDelete(id); // Buscar y eliminar usuario por id en la base de datos

        if (!eventDeleted)
            return res.status(404).json({ mensaje: "Evento no encontrado" }); // Si no existe el usuario, retornar un error

        return res.json(eventDeleted); // Retornar el usuario eliminado
    } catch (error) {
        return res.status(500).json(error); // Retornar el error
    }
};
