//require('dotenv').config({path: './env'})

import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import express from 'express';
import { app } from './app.js';

dotenv.config({path: './env'});




connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
})
.catch((error)=>{
    console.log("Error in connecting to the MongoDB database");
    throw error;
})



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