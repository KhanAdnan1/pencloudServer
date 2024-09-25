import express from "express";
import cors from "cors";

const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

//import routes

import Otp from "./routes/Otp.Routes.js"
import userRouter from "./routes/User.Routes.js"

//routes declaration
app.use("/auth",Otp);

app.use("/user",userRouter)

export default app;