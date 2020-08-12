const mongoose = require('mongoose');
const float = require('float');
require('float');

const bill = new mongoose.Schema({
    uid:{
        type: String,
        required:true
    },
   /* porder:[{
        pId:{
            type: String,
            require:true,
        },
        flavor:{
            type: mongoose.Schema.Types.ObjectId,
            default:"chocolate",
        },
        weight:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'weight',
            require:true,
        },
        qty:{
            type:Number,
            required:true,
        },
        amount:{
            type:Number,
            require:true,
        },
        delDateandTime:{
            type:Date,
            required:true,
        },
        note:{
            type:String,
            required:true,
        },
        muchneeded:{
            type:String,
        },
        eggless:{
            type: Boolean,
            default: 1,
        },
        status:{
            type:Boolean,
            required:true,
        },
        deliveryCharges:{
            type:float,
            require:true
        },
        paymentType:{
            type:Boolean,
            required:true,
        },
        address:{
            type: mongoose.Schema.Types.ObjectId,
            require:true,
        },
    }],*/
});

module.exports = mongoose.model('bill',bill);