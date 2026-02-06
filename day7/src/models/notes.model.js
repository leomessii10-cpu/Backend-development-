const mongoose=require('mongoose');

const noteschema=new mongoose.Schema({  //kis format mein data store krenge usko bolta hai schema decide krna. 
    title:String,
    description:String 
})

const notemodel=new mongoose.model('notes',noteschema); //it will create a model  

module.exports=notemodel

