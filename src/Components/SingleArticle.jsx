import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticle, getComments} from '../utils/api'
import  Loader from './Loader';
import Error from './Error';
import CommentsList from './CommentsList';
import Voter from './Voter';

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
          <h2 id='single-title'>{article.title}</h2>
          <h3>{article.topic}</h3>
          <p>Author: {article.author}</p>
          <p>{new Date (article.created_at).toLocaleString()}</p>
          <p id="single-article-body">{article.body}</p>
        </div>
        <div className='article-voter'>
          <Voter votes={article.votes} article_id={article_id} />
        </div> 
      </article>
      <section className='comments'>
        <h3>Comments</h3>
        <CommentsList comments={comments} />
      </section>
    </>
  )
}


