//require('dotenv').config({path: './env'})

import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import express from 'express';

dotenv.config({path: './env'});




connectDB();

 



/*
import express from 'express';
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("Error in connecting to the database");
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port {process.env.PORT}`)
        });
    } catch (error) {
        console.log("Error",error);
        throw error;
    }
})()

*/