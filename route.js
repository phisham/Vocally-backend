const express=require('express');
const bookData = require('./model/model');
const router=express.Router();

router.post('/create',async(req,res)=>{
    const data=await bookData.find({});
    
    const bookName=req.body.bookName;
    const author=req.body.author;

    const token=10000+data.length;
    console.log(token);
    try{
        await bookData.create({
            bookName,
            author,
            token
        })

        return res.json({"token":token,"status":"successfull"});
    }
    catch(e){
        return res.json(e);
    }
    
    
})

router.get('/getAllData',async(req,res)=>{
    const data=await bookData.find({});
    
    return res.json(data);
    
})


router.patch('/update/:id',async (req,res)=>{
    try{
        const id=req.params.id;
        const newData=req.body;

        const result= await bookData.findByIdAndUpdate(id,newData,{new:true});
        return res.status(200).json(result);
    }
    catch(e){
        return res.status(400);
    }
})

router.delete('/deleteAll',async (req,res)=>{
    try{
        const result=await bookData.remove({});
        return res.status(200).json(result);
    }
    catch(e){
        return res.status(400);
    }
})
router.delete('/delete/:id',async (req,res)=>{
    try{
        const id=req.params.id;
        const result=await bookData.findByIdAndDelete(id);
        return res.status(200).json(result);
    }
    catch(e){
        return res.status(400);
    }
})




module.exports=router;