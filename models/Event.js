import { Schema, model } from "mongoose";

// Definir el esquema Usuario de la colección

/* 
    Campos:

    - codigo: String (único)
    - nombres: String (requerido)
    - apellidos: String (requerido)
    - Foto: String (requerido)
    - Sexo: String (requerido)
    - Estado Civil: String
    - Cantidad de hijos: Number (default: 0)
    - Fecha de nacimiento: Date (requerido)
    - Lugar de nacimiento: String 
    - Dirección: String
    - TelefonoCasa: String
    - TelefonoCelular: String 
    - Correo: String (requerido)
    - Ultimo grado de estudio: String (requerido)

*/

const eventSchema = new Schema(
    {
        // Definir los campos del esquema
        // El campo _id es creado automáticamente por MongoDB
        codigo: {
            type: String,
            unique: true,
            required: true,
        },
        NombreEvento: {
            type: String,
            required: true,
        },
        fecha: {
            type: Date,
            required: true,
            
        },
        horaInicio: {
            type: Date,
            required: true,
            
        },
        horaFinal: {
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
