const express = require('express');
const router = express.Router();
const  mongoose  = require('mongoose');
const DelBoy = require('../models/DelBoy');

router.get('/',(req,res,next)=>{
    res.status(404);
    console.log(`someone is on DELBOY START!`);
});

router.get('/all',async(req,res)=>{
    try {
        const delboy = await DelBoy.find();
        res.json(delboy);
    } catch (error) {
        res.send(error);
    }
});
router.get('/:DBid',async(req,res)=>{
    const a = await DelBoy.find({uid:req.params.DBid});
    res.send(a);
});

router.post('/addDelBoy',(req,res,next)=>{
    const delboy = new DelBoy({
        dname: req.body.dname,
    });
    delboy.save(function (err) {
       if (!err) 
       {
           res.send(delboy);
       console.log('Success!');}
     });
});

router.post('/update',(req,res,next)=>{
    let update = req.body;
    DelBoy.findOne({"dname":update.Oid}).then(db=>{        
        db = update;
        DelBoy.findOneAndUpdate({"dname":update.Oid},db).then(db=>{
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
    DelBoy.findOneAndDelete({dname:d.dname}).then(function(db){
         console.log(db);
     }).catch(
        function(err) 
        {
            res.send(err)
         }
     ); 
});


module.exports = router;
