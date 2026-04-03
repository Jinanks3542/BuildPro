import mongoose from "mongoose";

export const connectDB =async()=>{
    try {
        if(!process.env.MONGO_URI){
            throw new Error(`MONGODB_URI is not defined`)
        }

        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected : ${connect.connection.host}`);
        
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}