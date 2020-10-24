const express=require('express')
const path=require('path')
const request=require('request')

const app=express()

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
})

app.get('/get',(req,res)=>{
    var text=req.param('data')
    request('http://18.212.242.209/getVehicleDetails?reg1='+text.slice(0,text.length-4)+'&reg2='+text.slice(text.length-4,text.length), function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body)
        }
    })
    
})

app.listen(8000,(req,res)=>{
    console.log("Server Running")
})