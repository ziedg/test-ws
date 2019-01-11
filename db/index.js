const  mongoose = require('mongoose');


//conncect to mongodb database .


const connectDB = async ()=>{
    try
    {
       await mongoose.connect("mongodb://localhost:27017/db");
       console.log("successfully connected to mongo")
    }
    catch(e){
        console.error(e);
    }

}

module.exports=connectDB;