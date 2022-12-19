import React from 'react'

function Post(props) {
    const {index, post} = props
  return (
    <div className="post-container">
      <h1 className="heading">{post.title}</h1>
      <img className="image" src={post.imgUrl} />
      <p>{post.body}</p>
      <h4>Written by: {post.author}</h4>
    </div>
  );
}

export default Post