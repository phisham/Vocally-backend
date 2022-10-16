const express=require('express');
const cors=require('cors');
const { process_params } = require('express/lib/router');
const router = require('./route');
var PORT=process.env.PORT || 5000;
const app=express();
const mongoose=require('mongoose');
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use(express.json()) // middleware for parsing application/json

mongoose.connect('mongodb+srv://phisham100:Hisham%4021@cluster0.jmjq8.mongodb.net/Vocally-backend?retryWrites=true&w=majority')
.then(console.log("MongoDB connected...."));

app.use('',router);

app.listen(PORT,(req,res)=>{
    console.log("Server connected on port 3000");
})

