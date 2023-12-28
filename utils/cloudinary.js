import { v2 as cloudinary } from "cloudinary";
import {
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    CLOUDINARY_CLOUD_NAME,
} from "../config/env.config.js";

// Cloudinary es la plataforma de almacenamiento de imágenes que vamos a utilizar

cloudinary.config({
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    cloud_name: CLOUDINARY_CLOUD_NAME,
    secure: true,
});

// Subir imagen a Cloudinary
export const upload = async (pathFile) => {
    return await cloudinary.uploader.upload(pathFile, {
        folder: "GraduacionPage",
    });
};

// Eliminar imagen de Cloudinary

export const destroyImage = async (public_id) => {
    return await cloudinary.uploader.destroy(public_id);
};
