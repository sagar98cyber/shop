const express = require('express');
const router = express.Router();
const  mongoose  = require('mongoose');
const Trans = require('../models/Trans');

router.get('/',(req,res,next)=>{
    res.status(404);
    console.log(`someone is on TRANS START!`);
});

router.get('/all',(req,res)=>{
    res.send('get all TRANS!');
});
router.get('/:Tid',(req,res)=>{
    res.send(`get user by id : ${req.params.Tid}!`);
});

router.post('/addTrans',(req,res,next)=>{
    const order = new Trans({
        from: req.body.from,
        to:req.body.to,
        amount:req.body.amount,
        ref:req.body.ref,
        date:req.body.date,
        description:req.body.description,
        orderDetails:req.body.orderDetails,
        type:req.body.type,
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

router.post('/update',(req,res,next)=>{
     
});

router.post('/delete',(req,res)=>{
});


module.exports = router;
