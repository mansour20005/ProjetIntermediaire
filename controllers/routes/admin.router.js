const express=require('express');
const route=express.Router();

route.get('/',async (req,res)=>{
    res.json({admin: ':)'});
})

module.exports=route;