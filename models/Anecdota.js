import { Schema, model } from "mongoose";

const anecdotaSchema = new Schema(
    {
        titulo: {
            type: String,
            required: true,
        },
        descripcion: {
            type: String,
            required: true,
        },
        usuario: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
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

const Anecdota = model("Anecdota", anecdotaSchema);

export default Anecdota;
