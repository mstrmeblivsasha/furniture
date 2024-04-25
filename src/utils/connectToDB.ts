import mongoose from "mongoose";

type TypeConnection = {
    isConnected?: number;
}

const connection: TypeConnection = {};

export const connectToDB = async () => {
    try {
        if (connection.isConnected) {
            return;
        }

        const db = await mongoose.connect(process.env.MONGO as string);
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        throw new Error(error as string)
    }
}