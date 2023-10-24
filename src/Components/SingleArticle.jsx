import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticle } from '../utils/api'
import  Loader from './Loader';
import Error from './Error';

export default function SingleArticle() {

  const { article_id } = useParams()

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticle(article_id).then((gotArticle) => {
      setArticle(gotArticle)
      setIsLoading(false)
    })
    .catch((err) => {
      setError(err.response.data.msg)
      setIsLoading(false)
  })
},[])

  return (
    <article className="single-article">
      { isLoading && <Loader />}
      { error && <Error error= { error } />}
      <img src={article.article_img_url} alt="" />
      <h3>{article.topic}</h3>
      <h2>{article.title}</h2>
      <p>Votes: {article.votes}</p>
      <p>Author: {article.author}</p>
      <p>{article.created_at}</p>
      <p>{article.body}</p>   
    </article>
  )
}


// const timestamp = new Date(gotArticle.created_at)
//       gotArticle.timestamp = timestamp
//       console.log(gotArticle)