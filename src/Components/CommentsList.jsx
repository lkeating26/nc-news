
export default function CommentsList({ comments }) {


  return (
    <>
      <ul className='comments-list'>
        {comments.map((comment) => {
          return (
            <li className='comment' key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>{comment.author}</p>
              <p>votes: {comment.votes}</p>
              <p>{new Date (comment.created_at).toLocaleString()}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}
