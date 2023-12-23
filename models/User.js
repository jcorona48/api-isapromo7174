import { Schema, Model } from "mongoose";

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

const userSchema = new Schema(
    {
        // Definir los campos del esquema
        // El campo _id es creado automáticamente por MongoDB
        codigo: {
            type: String,
            unique: true,
            required: true,
        },
        nombres: {
            type: String,
            required: true,
        },
        apellidos: {
            type: String,
            required: true,
        },
        foto: {
            type: String,
            required: true,
        },
        sexo: {
            type: String,
            required: true,
        },
        estadoCivil: {
            type: String,
        },
        cantidadHijos: {
            type: Number,
            default: 0,
        },
        fechaNacimiento: {
            type: Date,
            required: true,
        },
        lugarNacimiento: {
            type: String,
        },
        direccion: {
            type: String,
        },
        telefonoCasa: {
            type: String,
        },
        telefonoCelular: {
            type: String,
        },
        correo: {
            type: String,
            required: true,
        },
        ultimoGradoEstudio: {
            type: String,
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

const User = Model("User", userSchema);

export default User;
