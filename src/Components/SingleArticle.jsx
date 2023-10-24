import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticle, getComments} from '../utils/api'
import  Loader from './Loader';
import Error from './Error';
import CommentsList from './CommentsList';

export default function SingleArticle() {

  const { article_id } = useParams()

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticle(article_id).then((gotArticle) => {
      setArticle(gotArticle)
      setIsLoading(false)
    })
    .then(() => {
      getComments(article_id).then((gotComments) => {
        setComments(gotComments)
      })
    })
    .catch((err) => {
      setError(err.response.data.msg)
      setIsLoading(false)
  })
},[])

  return (
    <>
      <article className="single-article">
        { isLoading && <Loader />}
        { error && <Error error= { error } />}
        <img src={article.article_img_url} alt="" />
        <div className='single-article-text'>
          <h3>{article.topic}</h3>
          <h2>{article.title}</h2>
          <p>Votes: {article.votes}</p>
          <p>Author: {article.author}</p>
          <p>{article.created_at}</p>
          <p id="single-article-body">{article.body}</p>
        </div>  
      </article>
      <section className='comments'>
        <h3>Comments</h3>
        <CommentsList comments={comments} />
      </section>
    </>
  )
}


