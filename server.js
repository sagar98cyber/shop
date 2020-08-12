const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require(`dotenv/config`);
const products = require(`./routes/products`);
const kitchen = require(`./routes/kitchen`);
const bill = require(`./routes/bill`);
const delboy = require(`./routes/delboy`);
const order = require('./routes/order');
const trans = require('./routes/trans');
const users = require('./routes/users');
const wallet = require('./routes/wallet');

app.use(bodyparser.json());
app.use(cors());
app.use('/trans',trans); 
app.use('/orders',order);
app.use('/products',products);
app.use('/kitchen',kitchen);
app.use('/bills',bill);
app.use('/delboy',delboy);
app.use('/users',users);
app.use('/wallet',wallet);

app.get('/', function (req, res) {
  res.status(404);
  console.log(`somebod tried to access home screen`);
});

mongoose.connect(process.env.DBCON,
{ useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false },
()=>{
  console.log(`Connected to DB`);
});

app.listen(process.env.PORT,()=>{
    console.log(`app is running on ${process.env.PORT}!`);
});