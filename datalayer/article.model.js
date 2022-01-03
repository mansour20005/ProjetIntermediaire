const mongoose=require('mongoose');

const articleSchema =new mongoose.Schema({
    titre:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    photo:{
        type: String,
        required: true,
    },
    mini_photo:{
        type: String,
    },
    nbreArticle:{
        type: Number,
        default: 1,
    },
    prix:{
        type: Number,
        required: true,
    }
});

module.exports=mongoose.model('article',articleSchema);