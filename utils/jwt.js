import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
};

export const generateToken = (user) => {
    const { id } = user;
    const payload = {
        id,
    };
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: "30d",
    });
    return token;
};
