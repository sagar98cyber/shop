const mongoose = require('mongoose');
const float = require('float');
require('float');

const kitorderreq = new mongoose.Schema({
    uid:{
        type: String,
        required:true
    },
    proord:[{
        pId:{
            type: String,
            require:true,
        },
        paymentType:{
            type:Boolean,
            required:true,
        },
        amount:{
            type:Number,
            require:true,
        },
        address:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'addressContact',
            require:true,
        },
        status:{
            type:Boolean,
            required:true,
        },
    }],
});

module.exports = mongoose.model('kitorderreq',kitorderreq);