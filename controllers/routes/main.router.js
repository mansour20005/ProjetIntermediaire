const express=require('express');
const route=express.Router();
const articleServices= require('../../services/articles.service');
const userCtrl = require('../../services/user.service.js');

route.get('/',async (req,res)=>{
    let articles=await articleServices.getAllArticles();
    res.render('accueil', {articles});
})

route.get('/signup',(req, res, next)=>{
    res.render('pages/signup');
    next;
})
route.post('/signup',userCtrl.signup);

route.get('/login',(req,res,next)=>{
    res.render('pages/login');
    next;
})

route.post('/login',userCtrl.login);

route.get('/article',async (req,res)=>{
    let articles=await articleServices.getAllArticles();
    res.render('pages/article',{articles});
})

route.get('/apropos',(req,res)=>{
    res.render('pages/apropos');
})

route.get('/contact',async (req,res)=>{
    res.render('pages/contact');
});

module.exports=route;
