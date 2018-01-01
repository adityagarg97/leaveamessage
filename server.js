const express = require("express")
const path=require("path")
const table=require("./db")
const app=express()
const port=process.env.port||1111
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"/public")))
app.post("/",(req,res)=>{
    if(req.body.name===null || req.body.email===null){
        return res.status(403).send({
            error: "Invalid Data"
        })
    }
    table.create({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    }).then((data)=>{
        res.status(201).send(data)
    }).catch((err)=>{
        res.status(501).send({
            error:"Error sending message"
        })
    })
})
app.listen(1111,()=>console.log("Server started at "+port))