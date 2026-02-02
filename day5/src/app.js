const express=require('express');
const app=express();

app.use(express.json());

const note=[]

app.post('/notes',(req,res)=>{
    note.push(req.body);
    res.status(201).json({
        message:"note created successfully "
    })
    console.log(req.body);
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        notes:note
    });
})


module.exports=app;