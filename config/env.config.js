// Configuración de base de datos
export const MONGO_URI = process.env.MONGO_URI;

// Configuración de JWT

export const JWT_SECRET = process.env.JWT_SECRET;

// Configuración de roles

export const ADMIN_ROLE = process.env.ADMIN_ROLE || "Administrador";

// Configuración de Cloudinary

export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;

export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;

export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

// Configuración de puerto

export const PORT = process.env.PORT || 3000;
