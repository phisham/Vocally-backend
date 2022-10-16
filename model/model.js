const mongoose=require('mongoose');

const dataSchema= new mongoose.Schema({

    "bookName":{
        type:String,
        required:true
    },
    "author":{
        type:String,
        required:true
    },
    "token":{
        type:Number,
        required:true
    }
},{timestamps:true});

module.exports=mongoose.model("bookData",dataSchema);