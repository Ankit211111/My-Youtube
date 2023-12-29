import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

dotenv.config();
const app =express();
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>console.log(`server running at ${process.env.PORT}`))
})
.catch((err)=>{
    console.log("mongo connection failed",err);
})
