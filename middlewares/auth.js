import { verifyToken } from "../utils/jwt.js";
import User from "../models/User.js";
import { ADMIN_ROLE } from "../config/env.config.js";

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers["x-token"];
        console.log(token);
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Not authenticated",
            });
        }
        const payload = verifyToken(token);
        console.log(payload);
        const user = await User.findById(payload.id).populate("rol");
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Not authenticated",
            });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
    }
};

export const verifyAdmin = async (req, res, next) => {
    const user = req.user;
    if (user.rol.nombre !== ADMIN_ROLE) {
        return res.status(403).json({
            success: false,
            message: "Not authorized",
        });
    }
    next();
};
