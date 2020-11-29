const express=require("express")
const app=express()
const mongoose=require('mongoose')



app.get("/",(req,res)=>{
	res.send("working")
})


app.listen(8080)
