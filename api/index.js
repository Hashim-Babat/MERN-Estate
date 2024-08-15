import express from 'express';
import mongoose from 'mongoose'; 
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import cors from "cors"

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(()=>{
    console.log("Connected to MongoDB!");
    })
    .catch((err)=>{
        console.log(err)
    });
const app = express();

app.use(cors({origin: "http://localhost:5173",credentials:true,}));
app.use(express.json());

app.listen(3000,()=>{
    console.log('service running on port 3000!!!');
});

app.use("/api/user",userRouter);    
app.use("/api/auth",authRouter);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        status:statusCode,
        message:message,
    });
});