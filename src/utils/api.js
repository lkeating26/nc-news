import axios from "axios";

const newsAPi = axios.create({ 
    baseURL: 'https://news-project-982n.onrender.com/api', });


export const getArticles = () =>  {
    return newsAPi.get('/articles').then((res) => {
        return res.data.articles;
    });
};

export const getArticle = (article_id) => {
    return newsAPi.get(`/articles/${article_id}`)
    .then((res) => {
        return res.data.article;
    });
};

export const getComments = (article_id) => {
    return newsAPi.get(`/articles/${article_id}/comments`)
    .then((res) => {
        return res.data.comments;
    })
}

