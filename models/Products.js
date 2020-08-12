const mongoose = require('mongoose');
const float = require('float');
require('float');

const product = new mongoose.Schema(
{
   
    pname:{
        type: String,
        require:true,
    },
    amount:{
        type:float,
        require:true,
    },
   weight:[
        {
        type:String,
        require:true,
    }],
   /*flavor:[{
      fname: { 
          type: String,
          default:"chocolate",
        },
    }],*/
    eggless:{
        type: String,
        default: 1,
    },
    category:{
        type: String,
        require:true,
    },
    prodDetails:{
        type: String,
        require: true,
    },
    prdRank:{
        type:Number,
    },
    profitRatio:{
        type:float,
        require:true,
    },
    deliveryCharges:{
        type:float,
        require:true
    },
    tax:{
        type:float,
        require:true,
    },
    filename:{
        type: String,
        require:true,
    },
    fileloc:{
        type:String,
        required:true
    },
   /* deliverableat:[{
        pin:{
            type: Number,
            required:true,
        }
    }],*/
}
);

module.exports = mongoose.model('product',product);