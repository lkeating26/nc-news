import React from 'react'

export default function ArticleCard({ article }) {

  return (
    <div className='article_card'>
        <h3>{article.title}</h3>
        <img className='article_img'src={article.article_img_url} alt="" />
        <h4>{article.topic}</h4>
        <p>{new Date (article.created_at).toLocaleString()}</p>
        <p>Author: {article.author}</p>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
    </div>
  )
}
