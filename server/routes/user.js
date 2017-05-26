var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
//var User=require('../model/db');

var mongojs=require("mongojs");
var db=mongojs("mongodb://kartik:kartik.kd@ds153501.mlab.com:53501/user",['userinfo']);


// Get Single Task
router.get('/edit/:id', function(req, res, next){
    db.userinfo.findOne({username: req.params.id}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

 

//Save Task
router.post('/signup', function(req, res, next){
    var task = req.body;
    if(!task.firstname || !task.username){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.userinfo.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});


//login
router.post('/login', function(req, res, next){
    console.log("uname: "+req.body.username);
    console.log("pwd: "+req.body.password);

    var user=req.body.username;
    var pwd=req.body.password;
    db.userinfo.find({ username : user,password:pwd}, function(err, task){
           if(err)
           {
               res.send("Error has occurred");
           }
           else
           {
               console.log("List: "+task);
               res.json(task);
           }
      });
  //  res.json("pj");
  /*  var user=req.params.id;
    Activity.find({ username : user})
      .exec(function(err,mylists){
           if(err)
           {
               res.send("Error has occurred");
           }
           else
           {
               console.log("List: "+mylists);
               res.json(mylists);
           } */
   //   });
  /*  sort( '-title' ).
    exec( function ( err, mytasks ){
         if( err ) return next( err );
         if(err){
            res.send(err);
        }else {
            res.json(mytasks);
        }
    }); */
   
});

// Update Task
router.put('/editaccount/:id', function(req, res, next){
    var task = req.body;
    var updTask = {};
   // console.log("activity name:"+task.activity);
    if(task.firstname){
        updTask.firstname = task.firstname;
    }
     if(task.lastname){
        updTask.lastname = task.lastname;
    }
     if(task.email){
        updTask.email = task.email;
    }
    if(task.username){
        updTask.username = task.username;
    }

    if(task.password){
        updTask.password = task.password;
    }
   
     console.log("fnm: "+task.firstname);
     console.log("fnm: "+task.password);
     console.log("id: "+req.params.id);
    if(!updTask){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else {
        db.userinfo.update({ _id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
        if(err){
            res.send(err);
        }else {
            res.json(task);
        }
    });
    }
});
module.exports = router;