const express = require("express")
const path=require("path")
const app=express()
const port=process.env.PORT||1111
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"/public")))
table=[]
app.post("/",(req,res)=>{
    if(req.body.name===null || req.body.email===null){
        return res.status(403).send({
            error: "Invalid Data"
        })
    }
    table.push({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    })
    res.send(table)
})
app.get("/message",(req,res)=>{
    res.send(table)
})
app.listen(1111,()=>console.log("Server started at "+port))