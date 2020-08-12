const mongoose = require('mongoose');
const float = require('float');
require('float');
const DelBoy = new mongoose.Schema({
    dname:{
        type: String,
        required:true
    },
  /*  contact:{
        type: String,
        required:true,
    },
    uidai:{
        type: String,
        required:true,
    },
    numberOfDeliveryCompleted:{
        type: String,
        required:true,
    },
    amountInWallet:{
        type: String,
        required:true,
    },
    regVehicle:{
        type: String,
        required:true,
    },
    accountNumber:{
        type: String,
        required:true,
    }*/
});

module.exports = mongoose.model('DelBoy',DelBoy);