const mongoose = require('mongoose');
const float = require('float');
require('float');

const kitchen = new mongoose.Schema({
    kname:{
        type: String,
        required:true
    },
    contact:{
        type: Number,
        required:true,
    },
    ghumasta:{
        type: String,
        required:true,
    },
    countOfDelivery:{
        type: Number,
        required:true,
    },
    amountInWallet:{
        type: float,
        required:true,
    },
    amountToBeCollectedfromCompany:{
        type: float,
        required:true,
    },
    ffsciLincence:{
        type: String,
        required:true,
    },
    kitAddress:{
        type: String,
        required:true,
    },
    accountNumber:{
        type: Number,
        required:true,
    }
});

module.exports = mongoose.model('kitchen',kitchen);