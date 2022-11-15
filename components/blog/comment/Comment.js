import React from 'react'

const Comment = ({photo,comment}) => {
  return (
    <div className="comment-section pb-3">
      <img src={photo} height="100" width="100"  className="author-image" />
      <div className="comment-text">
          <span className="comment-name">{comment.name}</span>
          <p className="comment-body">{comment.body}</p>
      </div>             
 </div>   
  )
}

export default Comment