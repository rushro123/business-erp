import mongoose from "mongoose";

type ConnectionObject ={
    isConnected?: number
}
const connection: ConnectionObject = {}

async function dbConnect() : Promise<void> {
    if (connection.isConnected) {
        console.log("Already connected to database")
        return
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/my-erp", {
        })
        connection.isConnected = 1
        console.log("Connected to database")
    }
    catch (error) {
        console.error("Error connecting to database:", error)
    }
}