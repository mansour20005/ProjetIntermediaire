const Article=require('../datalayer/article.model');
const getAllArticles= async ()=>{
    let articles = await Article.find();
    return articles;
}

const saveArticle = async (article)=>{
    let result = await Article.create(article);
    return result;
}
module.exports={
    getAllArticles,
    saveArticle
}