import { Schema, model } from "mongoose";

const eventSchema = new Schema(
    {
        nombreEvento: {
            type: String,
            required: true,
        },
        fechaInicio: {
            type: Date,
            required: true,
        },

        fechaFinal: {
            type: Date,
            required: true,
        },
        lugar: {
            type: String,
        },
        direccion: {
            type: String,
        },
    },
    {
        // Agregar los campos createdAt y updatedAt
        timestamps: true,
        // Deshabilitar la versión __v
        versionKey: false,
    }
);

// Definir el modelo Usuario

const Event = model("Event", eventSchema);

export default Event;
