const mongoose = require('mongoose');
const float = require('float');
require('float');

const Trans = new mongoose.Schema({
    from:{
        type: String,
        required:true,
    },
    to:{
        type: String,
        required:true,
    },
    amount:{
        type: float,
        required:true,
    },
    
    ref:{
        type: String,
        required:true,
    },
    date:{
        type: Date,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    orderDetails:
    {
        type: String,
        required:true,
    },
    type:{
        type: Boolean,
        required:true,
    },
});

module.exports = mongoose.model('Trans',Trans);