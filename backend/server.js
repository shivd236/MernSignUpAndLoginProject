const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
require('dotenv').config();

const port =  process.env.PORT || 4000

const app = express();

//-->middleware

app.use(cors());

app.use(bodyParser.json({
   limit : "5mb",
   extended : true,
}))

app.use(bodyParser.urlencoded({
  extended : true
}))

app.use(express.json({
  extended : true,
}));



//------------------------------------//

app.use('/user',userRoutes);



app.use('/', (req, res) => {
  res.send(`server is running Up port is 4000`);
})



mongoose.connect(process.env.DBURL).then(() =>{
  app.listen(port , () => {
    console.log('connected db');
    console.log('server is running up port is 4000');
    
    
  })
}).catch((err)=> {
  console.log(err.message);
  
})

