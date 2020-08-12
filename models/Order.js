const mongoose = require('mongoose');
const float = require('float');
require('float');
const Orders = new mongoose.Schema({
        uid:{
            type: String,
            required:true,
        },
        
       orderdetails:[{
        prodId:{
            type: Number,
            required:true,
        },
        selectedAddress:{
            type:Number,
            required:true,
        },
        payType:{
            type: Boolean,
            required:true,   
        },
        amount:{
            type: Number,
            required:true,  
        },
        flavor:{
            type: String,
        },
        eggless:{
            type: Boolean,
            required:true,
        },
        prodDetails:{
            type: String,
        },
        weight:{
            type:Number,
            required:true,
        },
        profitraio:{
            type:Number,
            required:true,
        },
        deliveryCharges:{
            type:Number,
            required:true,
        },
        tax:{
            type:Number,
            required:true,
        },
        fileloc:{
            type:String,
            required:true,
        },
        filename:{
            type:String,
            required:true,
        },
    }],
});

module.exports = mongoose.model('Orders',Orders);