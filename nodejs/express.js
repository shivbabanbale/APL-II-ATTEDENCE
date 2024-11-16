const http=require("http");

const file=require("fs");

const express=require("express");

const app=express();

app.get("/",(req,res)=>{


return res.send("papalu ho kya be");


})
app.get("/about",(req,res)=>{


    return res.send("papalu about ho  kya be"+"with query "+req.query.name+ req.query.password+" ");
    
    
    })




// const myserver= http.createServer(app)
// app.listen(3000,()=>console.log("server is stat na bhai"))

app.listen(8000,()=>console.log("Chalu ho gaya Guru"))

