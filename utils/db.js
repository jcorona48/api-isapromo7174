import { connect } from "mongoose";

// Conectar a la base de datos de MongoDB
export const connectDB = async () => {
    try {
        const conn = await connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
