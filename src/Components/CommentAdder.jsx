import { formToJSON } from 'axios'
import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../contexts/User'
import { updateComments } from '../utils/api'

export default function CommentAdder({ article_id, setCommentAdded }) {

  const { user } = useContext(UserContext)

  const [showCommentForm, setShowCommentForm] = useState(false)
  const [inputComment, setInputComment] = useState('');
  const [error, setError] = useState(null);
  const [commentPosted, setCommentPosted] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false)

  const handleClick = () => {
    setShowCommentForm(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitDisabled(true)
    updateComments(article_id, user.username, inputComment).then((res) => {
      setCommentAdded((curr) => {
        setCommentPosted(true)
        return !curr;
      })
    })
    .catch((err) => {
      setError(err)
    })
    setInputComment('')
    setSubmitDisabled(false)
    setCommentPosted(false)
    setError(null)
  }


  return (
    <section className='comment-adder'>
      { !showCommentForm ? <button onClick={handleClick}>add a comment</button>
      : <form onSubmit={handleSubmit}>
        <label htmlFor="add-comment">Your comment:
        <textarea 
        required
        minLength="5"
        rows="3"
        autoComplete='off'
        name="comment" 
        id="add-comment"
        value={inputComment}
        onChange={(e) => setInputComment(e.target.value)} />
        </label>
        <button disabled={submitDisabled}>post comment</button>
        { error && <p>Sorry, unable to add your comment at this time! Please try again later.</p>}
        { commentPosted && <p>Comment posted successfullly!</p>}
      </form> }
    </section>
  )
}
