const express = require('express');
const router = express.Router();
const  mongoose  = require('mongoose');
const Products = require('../models/Products');

router.get('/',(req,res,next)=>{
    res.status(404);
    console.log(`someone is on PRODUCTS START!`);
});

router.get('/all',(req,res)=>{
   Products.find((err,Products)=>{
       console.log("Done");
    if (err) {
        console.log(err);
    } else {
        res.json(Products);
    }
   });
});
router.get('/:Pid',(req,res)=>{
    res.send(`get user by id : ${req.params.Pid}!`);
});

router.post('/addproduct',(req,res)=>{
    const order = new Products({
        pname: req.body.pname,
        amount:req.body.amount,
        weight:req.body.weight,
        flavor:req.body.flavor,
        eggless:req.body.eggless,
        category:req.body.category,
        prodDetails:req.body.prodDetails,
        prdRank:req.body.prdRank,
        profitRatio:req.body.profitRatio,
        deliveryCharges:req.body.deliveryCharges,
        tax:req.body.tax,
        filename:req.body.filename,
        fileloc:req.body.fileloc,
        deliverableat:req.body.deliverableat
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
    
    Products.findOne({"_id":update._id}).then(db=>{        
        console.log(update);
        db = update;
        Products.findOneAndUpdate({"_id":update._id},db).then(db=>{
            return res.send("done");
        }).catch(err=>{            
            console.log(err);
            return res.send("first catch");            
        });        
    }).catch(err=>{
        console.log(err);
        return res.send("second catch");
    });
   
});

router.post('/delete',(req,res)=>{
    let d = req.body;
    Products.findOneAndDelete({pname:d.pname}).then(function(db){
        console.log(db);
    }).catch(
       function(err) 
       {
           res.send(err)
        }
    );  
});

module.exports = router;