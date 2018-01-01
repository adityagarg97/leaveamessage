const sequelize=require("sequelize")
const db=new sequelize("messages","messageuser","mypass",{
    host:"localhost",
    dialect:"mysql",
})
const messageTable=db.define("messageTable",{
    id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    email:{
        type:sequelize.STRING,
        allowNull:false
    },
    name:{
        type:sequelize.STRING,
        allowNull:false
    },
    message:sequelize.STRING
})
db.sync()
    .then(()=>console.log("Database created successfully"))
    .catch(()=>console.log("Error creating the database"))
exports=module.exports=messageTable