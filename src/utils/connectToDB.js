import mongoose from "mongoose";

// type TypeConnection = {
//     isConnected?: boolean | string;
// }

// const connection : TypeConnection = {};
const connection = {};


export const connectToDB = async () => {
    try {
        if (connection.isConnected) {
            return;
        }

        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
        // console.log(connection.isConnected)
    } catch (error) {
        throw new Error(error)
    }
}