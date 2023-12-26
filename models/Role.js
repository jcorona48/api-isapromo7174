import { Schema, model } from "mongoose";

const roleSchema = new Schema(
    {
        nombre: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        descripcion: {
            type: String,
            trim: true,
        },
        estado: {
            type: String,
            default: "ACTIVE",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("Role", roleSchema);
