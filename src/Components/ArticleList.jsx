import { useState, useEffect } from 'react';
import { getArticles } from '../utils/api';
import ArticleCard from './ArticleCard';

export default function ArticleList() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles().then((gotArticles) => {
            setArticles(gotArticles)
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);

  return (
    <div className="articles">
        <h2>Articles</h2>
        <ul className="article__list">
            {articles.map((article) => {
                return (
                    <li key={article.article_id}>
                        <ArticleCard article={ article }/>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
