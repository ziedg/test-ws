const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema =  new Schema({
    nom:String,
    prenom:String,
    email:String

})


const user = mongoose.model('user',userSchema)

module.exports=user;
