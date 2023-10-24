import React from 'react'

export default function ArticleCard({ article }) {

  return (
    <div className='article_card'>
        <h3>{article.title}</h3>
        <img className='article_img'src={article.article_img_url} alt="" />
        <p>Author: {article.author}</p>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
    </div>
  )
}
