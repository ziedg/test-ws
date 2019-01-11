
const  express = require('express');
const bodyparser = require('body-parser');
const PORT = 3000 | process.env.PORT

const connectDb = require('./db/index');


const  app = express()

//connect to mongodb 
  connectDb();

    //middlewares
 app.use(bodyparser.json());
 

 //require routes
 require('./routes/index')(app);




app.listen(()=>{
    console.log('the app is up at Port ',PORT);
})

