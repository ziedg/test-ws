const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const articleSchema =  new Schema({
      nom:String,
    description:String,
    prix:Number,
    proprietaire: { type: Schema.Types.ObjectId, ref: 'user' }

})


const article = mongoose.model('article',articleSchema)
module.exports=article;