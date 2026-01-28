const express=require('express');
const app=express();

const notes=[]
   
app.use(express.json())

app.post('/notes',(req,res)=>{  //creating new api for post method 

    console.log(req.body);
    notes.push(req.body);
    res.send('note created ')
    
})

app.get('/notes',(req,res)=>{  //creating new api for get 
    res.send(notes)
})



app.listen(8080,()=>{
    console.log("server is starting" );
});