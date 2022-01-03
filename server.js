require('dotenv').config();
const express= require('express');
// const res = require('express/lib/response');
const mainRouter=require('./controllers/routes/main.router');
const adminRouter=require('./controllers/routes/admin.router');
const userRouter=require('./controllers/routes/user.router');
const port=process.env.PORT || 3000;
const host=process.env.HOST || 'http://localhost';
const mongoose=require('mongoose');



const mongoUrl=process.env.MONGO_URL;

try{
    mongoose.connect(mongoUrl,()=>{
        console.log('Votre base de donnée mongo instance est connecter avec succés');
    });
} catch(error){
    console.log('Impossible de te connecter à votre base de donnée mongo instance', error);
}

const app=express();

//ejs
app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.use('/',mainRouter);
app.use('/admin',adminRouter);
app.use('/login', userRouter);

app.get((req,res)=>{
    res.json({message:'404 erreur not found'});
});

app.listen(port,()=>{
    console.log(`Server listening on ${host}:${port}`)
});