const mongoose = require('mongoose');
const float = require('float');
require('float');
//const weight = require(`./weightprod`);
const orderHistory = new mongoose.Schema(
{
    uid:{
        type: String,
        require:true,
    },
    pid:{
        type: String,
        require:true,
    },
    amount:{
        type: Number,
        require: true,
    },
    status:{
        type:String,
        required:true,
    },
    paidStatus:{
        type:Boolean,
        required:true
    },
}
);

module.exports = mongoose.model('orderHistory',orderHistory);