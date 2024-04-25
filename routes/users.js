var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");
require('../models/connection');
const User = require('../models/users')
const {checkBody} = require('../modules/checkBody')

    router.post('/signup', (req, res) => {
        
            if(!checkBody(req.body,['email','password'])){
                res.json({ result: false, error: 'Missing or empty fields' }); 
            }else{
                    // const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                    // if(!emailPattern.test(req.body.email)){
                    //     res.json({ result: false, error: 'Missing or empty fields' });
                    // }else{
                            User.findOne({ email: req.body.email}).then(found => {
                            if(found){
                                res.json({ result: false, error: 'User already exists' });
                            }else {
                                const newUser = new User({
                                    name: req.body.name,
                                    email: req.body.email,
                                    password: req.body.password
                                });
                                newUser.save().then(() => {res.json({ result: true })});
                            }       
                        }
                    );
                }    
            }
        // }
    )
    

    router.post('/signin', (req, res) => {
        
        if(!checkBody(req.body,['email','password'])){
            res.json({ result: false, error: 'Missing or empty fields' }); 
        }else{
            User.findOne({ email: req.body.email, password: req.body.password})
            .then(found => {
                if(!found){
                    res.json({ result: false, error: 'User not found' });
                }else{
                    res.json({ result: true });
                }
            }
            );
        }
    })


module.exports = router;
