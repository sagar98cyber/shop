const express = require('express');
const router = express.Router();
const  mongoose  = require('mongoose');
const Bill = require('../models/Bill');

router.get('/',(req,res,next)=>{
    res.status(404);
    console.log(`someone is on BILL START!`);
});

router.get('/all',async(req,res)=>{
    try {
        const Bill = await Bill.find();
        res.json(Bill);
    } catch (error) {
        res.send(error);
    }
    
});
router.get('/:Tid',async(req,res)=>{
    const a = await Bill.find({uid:req.params.Tid});
    res.send(a);
   // res.send(`get user by id : ${req.params.Tid}!`);
});

router.post('/addBill',(req,res,next)=>{
    const bill = new Bill({
        uid: req.body.uid,
    });
    bill.save(function (err) {
       if (!err) 
       {
           res.send(bill);
       console.log('Success!');}
     });
    
});


router.post('/update',(req,res)=>{
    let update = req.body;
    Bill.findOne({"uid":update.Oid}).then(db=>{        
        db = update;
        Bill.findOneAndUpdate({"uid":update.Oid},db).then(db=>{
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
        Bill.findOneAndDelete({uid:d.uid}).then(function(db){
             console.log(db);
         }).catch(
            function(err) 
            {
                res.send(err)
             }
         );  
});


module.exports = router;
