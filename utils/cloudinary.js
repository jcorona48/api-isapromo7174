import { v2 as cloudinary } from "cloudinary";

// Cloudinary es la plataforma de almacenamiento de imágenes que vamos a utilizar

// Configuración de Cloudinary
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;

cloudinary.config({
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    cloud_name: CLOUDINARY_CLOUD_NAME,
});

// Subir imagen a Cloudinary
export const upload = async (pathFile) => {
    return await cloudinary.uploader.upload(pathFile);
};
