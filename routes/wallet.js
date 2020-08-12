const express = require('express');
const router = express.Router();
const  mongoose  = require('mongoose');
const Wallet = require('../models/Wallet');

router.get('/',(req,res,next)=>{
    res.status(404);
    console.log(`someone is on Wallets START!`);
});

router.get('/all',(req,res)=>{
    console.log('get all transactions');
});
router.get('/:Wid',(req,res)=>{
    res.send(`get user by id : ${req.params.Wid}!`);
});

router.post('/addWallet',(req,res)=>{
    const bill = new Wallet({
        ref: req.body.ref,
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
    Wallet.findOne({"ref":update.ref}).then(db=>{        
        db = update;
        Wallet.findOneAndUpdate({"ref":update.ref},db).then(db=>{
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
    Wallet.findOneAndDelete({ref:d.ref}).then(function(db){
         console.log(db);
     }).catch(
        function(err) 
        {
            res.send(err)
         }
     );  
});


module.exports = router;
