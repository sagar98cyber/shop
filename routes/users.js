const express = require('express');
const router = express.Router();
const  mongoose  = require('mongoose');
const Users = require('../models/User');
const { findByIdAndUpdate, findOne } = require('../models/User');


router.get('/',(req,res)=>{
    res.status(404);
    console.log(`someone is on USERS START!`);
});

router.get('/all', (req,res)=>{
    try {
        const user =  Users.find();
        res.json(user);
    } catch (error) {
        res.send(error);
    }
});

router.get('/:Uid',(req,res)=>{
   const a = find({uname:req.params.Uid});
   res.send(a);
});

router.post('/addUser',(req,res)=>{
    let a = req.body;
    
    const user = new Users({
    uname: req.body.uname,
    emailId:req.body.mail,
    address:req.body.address,
    cart: req.body.cart,
    verifiedstatus:req.body.verifiedstatus,
    dob:req.body.dob,
    contact:req.body.contact,
 });
 console.log(user)
 
 user.save(err=> {
    if (!err) console.log('Success!');
  });
 
});

router.post('/delete',(req,res)=>{    
    let d = req.body;
        Users.findOneAndDelete({_id:d.uid}).then(function(db){
             console.log(db);
         }).catch(
            function(err) 
            {
                res.send(err)
             }
         );  
});

router.post('/update',(req,res)=>{
    let update = req.body;
    Users.findOne({"uname":update.Oid}).then(db=>{        
        db = update;
        Users.findOneAndUpdate({"uname":update.Oid},db).then(db=>{
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


module.exports = router;
