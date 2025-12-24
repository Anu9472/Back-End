import express from "express"
import dotenv from "dotenv";

dotenv.config()

const app = express();


app.get("/add",(req,res)=>{
    res.send("Welcome to our server")
})

const port = process.env.port || 8085
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
    
})
