const mongoose=require('mongoose');

function connectToDb() {
  //this command is used to connect express server to database and
  // we are writing day-6 intentionally , if this command don't get the given database , it will create it but not show error

  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("connected to database");
    });
}

module.exports=connectToDb