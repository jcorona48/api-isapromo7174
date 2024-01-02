import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

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
        nombres: {
            type: String,
            required: true,
        },
        apellidos: {
            type: String,
            required: true,
        },
        password: {
            type: String,
        },
        foto: {
            img_url: String,
            img_id: String,
        },
        sexo: {
            type: String,
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
        descripcion: {
            type: String,
        },
        telefonoCelular: {
            type: String,
        },
        correo: {
            type: String,
            required: true,
            unique: true,
        },
        ultimoGradoEstudio: {
            type: String,
        },
        rol: {
            ref: "Role",
            type: Schema.Types.ObjectId,
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

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    console.log("Cifrando contrasena: " + password);
    return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
};

// Definir el modelo Usuario

const User = model("User", userSchema);

export default User;
