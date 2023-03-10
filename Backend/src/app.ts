import express from "express";
import "dotenv/config"
const app = express()


app.get("/",(req,res)=>{
    res.send("hi, sonu how are you")
    })
    

export default app