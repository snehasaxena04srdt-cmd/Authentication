const express=require("express");
const  authRouters= require("./routers/auth.routers");


const app=express();
app.use(express.json());

app.use("/api/auth", authRouters)

module.exports=app;
