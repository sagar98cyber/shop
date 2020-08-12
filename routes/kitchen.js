const express = require('express');
const router = express.Router();


const  mongoose  = require('mongoose');
const Kitchen = require('../models/Kitchen');

router.get('/',(req,res,next)=>{
    res.status(404);
    console.log(`someone is on KITCHEN START!`);
});

router.get('/all',async(req,res)=>{
    try {
        const kit = await Kitchen.find();
        res.json(kit);
    } catch (error) {
        res.send(error);
    }
});
router.get('/:Kid',async(req,res)=>{
    const a = await Kitchen.find({kname:req.params.Kid});
    res.send(a);
});

router.post('/addKitchen',(req,res)=>{
    const kit = new Kitchen({
        kname: req.body.kname,
        contact:req.body.contact,
        ghumasta:req.body.ghumasta,
        countOfDelivery:req.body.countOfDelivery,
        amountInWallet:req.body.amountInWallet,
        amountToBeCollectedfromCompany:req.body.amountToBeCollectedfromCompany,
        ffsciLincence:req.body.ffsciLincence,
        kitAddress:req.body.kitAddress,
        accountNumber:req.body.accountNumber,
    });
    kit.save(function (err) {
       if (!err) 
       {
           res.send(kit);
       console.log('Success!');}
     });
});

router.post('/update',(req,res)=>{
    let update = req.body;
    Kitchen.findOne({"kname":update.Oid}).then(db=>{        
        db = update;
        Kitchen.findOneAndUpdate({"kname":update.Oid},db).then(db=>{
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
    Kitchen.findOneAndDelete({kname:d.kname}).then(function(db){
        console.log(db);
    }).catch(
       function(err) 
       {
           res.send(err)
        }
    );  
});


module.exports = router;
