import axios from "axios";

const newsAPi = axios.create({ 
    baseURL: 'https://news-project-982n.onrender.com/api', });


export const getArticles = () =>  {
    return newsAPi.get('/articles').then((res) => {
        return res.data.articles;
    });
};