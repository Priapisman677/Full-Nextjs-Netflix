import mongoose from "mongoose";
import chalk from "chalk";


let isConnected = false;

export const connectDB  = async()=>{

    if(isConnected){
        console.log(chalk.inverse.green("MongoDB is already connected"));	
        return
    }
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI2 as string)
        console.log(chalk.inverse.green("MongoDB connected: ") + conn.connection.host ) 
        isConnected = true
    }catch(e){
        console.log(chalk.inverse.red('Error connecting to MongoDB: ' + e));	
        process.exit(1) //$ 1 means there was an error, 0 means success.  
    }

}