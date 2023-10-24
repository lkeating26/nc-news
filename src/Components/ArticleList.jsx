import { useState, useEffect } from 'react';
import { getArticles } from '../utils/api';
import ArticleCard from './ArticleCard';
import { Link } from 'react-router-dom';
import  Loader from './Loader';
import Error from './Error';

export default function ArticleList() {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles().then((gotArticles) => {
            setArticles(gotArticles)
            setIsLoading(false)
        })
        .catch((err) => {
            setError(err.response.data.msg)
            setIsLoading(false)
        })
    }, []);


  return (
    <section className="articles">
        <h2>Articles</h2>
        { isLoading && <Loader />}
        { error && <Error error= { error } />}
        <ul className="article__list">
            {articles.map((article) => {
                return (
                    <li key={ article.article_id }>
                        <Link to={`/articles/${article.article_id}`}>
                            <ArticleCard article={ article }/>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}
