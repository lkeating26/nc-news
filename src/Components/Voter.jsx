import { useState } from "react"
import { updateVote } from "../utils/api"

export default function Voter({ votes, article_id }) {

  const [userVotes, setUserVotes] = useState(0);
  const [error, setError] = useState(null);

  const handleClick = (vote) => {
    setUserVotes((currVote) => {
      return currVote + vote;
    })
    updateVote(article_id, vote).then(() => {

    })
    .catch((err) => {
      setError(err)
      setUserVotes(0)
    })
  }

  return (
    <>
      <p>Likes: { votes + userVotes }</p>
      <button  
        className="like-btn"
        disabled={userVotes === 1} 
        aria-label="like button"
        onClick={() => {handleClick(1)}}>
        Like
      </button>
      <button  
        className="dislike-btn"
        disabled={userVotes === -1} 
        aria-label="dislike button"
        onClick={() => {handleClick(-1)}}>
        Dislike
      </button>
      { error && <p>Sorry, unable to update likes at this time!</p>}
    </>
  )
}
