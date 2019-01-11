
const User = require('../models/User');


module.exports = (app)=>{


    //for testing in order to add some users

    //ajouter un utilisatur 
app.post('/api/user/add',(req,res)=>{
    const {nom,prenom,email}= req.body;
    const user = new User({ nom,prenom,email})
})




}