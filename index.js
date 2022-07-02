const express = require('express')
//const server =require('express')
const path=require('path')
const fs=require('fs')
const app=express()
const port =3000
const port1 =4000
app.get('/',(req,res)=>{
    res.send("<h1> this is my fs </h1>")
     
})

app.get('/this',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
})
app.post('/this',(req,res)=>{
    const body= req.body()
    console.log(body)
})
app.listen(port,()=>{
    console.log(`the port is running on http:/localhost${port}`)
})

app.listen(port1,()=>{
     console.log('this is new port')
})


