//server ko create krna 
//server ko config krne ke liye we use app.js

const express=require('express')
const app=express();

app.use(express.json())

const notes=[]

app.get('/',(req,res)=>{
    res.send('this is bussiness');
});

app.post('/note',(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.send('notes created')
})

app.get('/note',(req,res)=>{
    res.send(notes)
})

app.delete('/note/:index',(req,res)=>{
    console.log(req.params);
    delete notes[req.params.index]
    res.send('done ')
})

app.patch('/note/:index',(req,res)=>{
    notes[req.params.index].description=req.body.description
    res.send('note updated successfully')
})

module.exports=app//exporting for usage in server.js
