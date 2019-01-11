
const  express = require('express');
const bodyparser = require('body-parser');
const PORT = 3000;

const connectDb = require('./db/index');


const  app = express()

//connect to mongodb 
  connectDb();

    //middlewares
 app.use(bodyparser.json());
 

 //require routes
 app.get('/',(req,res)=>{
   res.send('Im ok')
 })
 require('./routes/index')(app);



app.listen(PORT,()=>{
    console.log("the server is Listening At PORT ",PORT);
})

