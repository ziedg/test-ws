const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const articlerSchema =  new Schema({
    _id:mongoose.Types.ObjectId,
    nom:String,
    description:String,
    prix:String,
    proprietaire: { type: Schema.Types.ObjectId, ref: 'user' }

})


mongoose.model('article',articleSchema)