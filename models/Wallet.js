const mongoose = require('mongoose');
const float = require('float');
require('float');
const Wallet = new mongoose.Schema({
    ref:{
        type: String,
        required:true,
    },
   empId:{
        type: String,
        required:true,
    },
  /*  from:{
        type: String,
        required:true,
    },
    to:{
        type: String,
        required:true,
    },
    userType:{
        type: String,
        required:true,
    },
    amount:{
        type: String,
        required:true,
    },*/
});

module.exports = mongoose.model('Wallet',Wallet);