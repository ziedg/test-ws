
const User = require('../models/User');
const Article = require('../models/Article');


module.exports = (app)=>{


    //for testing in order to add some users

    //ajouter un utilisatur 
app.post('/api/user/add/', async (req,res)=>{
    const {nom,prenom,email}= req.body;

    const user = new User({ nom,prenom,email})
      try {
          await user.save();
          res.send("User added successfully <3");
      }
      catch(e){
          console.error(e);
      }

})

//ajouter un article  --- Object  relation user est propretaire d'un object

app.post('/api/article/add',async (req,res)=>{
   //for the testing perpose email is the Id of a user
   const { email,   nom,description,  prix}=  req.body;
    const { _id }  =  await  User.findOne({email});
   if (_id){
       const article = new Article ({nom,description,prix,proprietaire:_id })
       await article.save()
       res.send('Article addedd successfully');

   }

})



//recuperer le nombre d'utilisateur ...

app.get('/api/user/getUserCount', async (req,res)=>{
       const  users =  await   User.find({})
       res.send({count : users.length})
})

app.post('/api/user/getUserInfo', async (req,res)=>{
     const {email}= req.body;
     try{
        const  user =  await User.findOne({email})
        
          user && res.send(user);
     }
     catch(e)
    {
        res.send({error:"Unable to find User"});
    }
   
})


app.post('/api/user/getUsersInfos', async (req,res)=>{
    const {nom}= req.body;
    try{
       const  users =  await User.find({nom})
       
         users && res.send(users);
    }
    catch(e)
   {
       res.send({error:"Unable to find Users"});
   }
  
})

//Récupérer la liste de tous les objets d’un utilisateur.
app.post('/api/user/articles', async (req,res)=>{
    const {email }= req.body;
    try {
        const {_id }=  await User.findOne({email});
        const articles = await Article.find({proprietaire:_id});
        articles  && res.send({articles});
        
    } catch (error) {
        console.error(error);
    }



})




}