import { connect } from "mongoose";
import { MONGO_URI } from "../config/env.config.js";

// Conectar a la base de datos de MongoDB
export const connectDB = async () => {
    try {
        const conn = await connect(MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
