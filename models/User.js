const mongoose = require('mongoose');
const float = require('float');
require('float');
//const weight = require(`./weightprod`);
const user = new mongoose.Schema(
{
    uname:{
        type: String,
        require:true,
    },
    address: [{
       lane: { type: String, require:true,}
    }],
   cart:[{
  
            pId:{
                type: String,
                require:true,
            },
            flavor:{
                type: String,
                default:"chocolate",
            },
            weight:{
                type: float,
                require:true,
            },
            qty:{
                type:Number,
                required:true,
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
               type: String,
               },
            eggless:{
                type: Boolean,
                default: 1,
            },    
    }],
   verifiedstatus:{
        type: Boolean,
        default: 1,
    },
    dob:{
        type: Date,
        require:true,
    },
    contact:{
        type: Number,
        require: true,
    },
    emailId:{
        type:String,
    },
}
);

module.exports = mongoose.model('user',user);