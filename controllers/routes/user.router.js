const express = require('express');
const route = express.Router();
const userCtrl = require('../../services/user.service.js');

// route.get('/signup',(req,res)=>{
//     res.render('pages/signup');
// })

// route.get('/login',(req,res)=>{
//     res.render('pages/login');
// })

route.post('/signup', userCtrl.signup);
route.post('/login', userCtrl.login);

module.exports = route;