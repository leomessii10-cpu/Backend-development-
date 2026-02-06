const express=require('express');
const app=express();
const notemodel=require('./models/notes.model.js');
app.use(express.json());
app.post('/notes',async (req,res)=>{ //async ka use se hota hai ki baaki ke kaam hote rhete yeh kaam na hone se baki ke kaam nhi rukenge vo toh hote rhenge and jab apna yeh kaam hoga toh sab shi ho jayega 
    const {title,description}=req.body;
    const note = await notemodel.create({   //because we dont know how much time it will take that is why I am using await ki jitna bhi lage lekin ho jana chahiye 
        title,description
    });

    res.status(201).json({
        message:"Note Created successfully",note
    })

})

module.exports=app
