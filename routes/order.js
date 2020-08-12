const express = require('express');
const router = express.Router();
const  mongoose  = require('mongoose');
const Order = require('../models/Order');
const { findByIdAndDelete, findOneAndDelete } = require('../models/Order');

router.get('/',(req,res,next)=>{
    res.status(404);
    console.log(`someone is on ORDERS START!`);
});

router.get('/all',async(req,res)=>{
    try {
        const kit = await Order.find();
        res.json(kit);
    } catch (error) {
        res.send(error);
    }
});
router.get('/:Oid',async(req,res)=>{
    const a = await Order.find({uid:req.params.Oid});
    res.send(a);
});

//router.use('/:OId',(req,res,next)=>{
    
//});

router.post('/addOrder',(req,res)=>{   
    const order = new Order({
    uid: req.body.uid,
    orderdetails:req.body.orderdetails,
 });
 console.log(order);
 
 order.save(err=> {
    if (!err) {
        console.log('Success!');  
    } else {
        console.log(err);
    } 
  });
});

router.post('/update',(req,res)=>{           
    let update = req.body;
    Order.findOne({"uid":update.Oid}).then(db=>{        
        db = update;
        Order.findOneAndUpdate({"uid":update.Oid},db).then(db=>{
            return res.send("done");
        }).catch(err=>{            
            console.log(err);
            return res.send("done");            
        });        
    }).catch(err=>{
        console.log(err);
        return res.send("done");
    });
   
}); 

router.post('/delete',(req,res)=>{
    
        let d = req.body;
         Order.findOneAndDelete({uid:d.uid}).then(function(db){
             console.log(db);
         }).catch(
            function(err) 
            {
                res.send(err)
             }
         );  
});

module.exports = router;
