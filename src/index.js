import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>console.log(`server running at ${process.env.PORT}`))
})
.catch((err)=>{
    console.log("mongo connection failed",err);
})
