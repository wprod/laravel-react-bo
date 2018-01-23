import React, {Component} from 'react';

const Post = ({post}) => {
  const divStyle = {
    //TODO
  }

  if (!post) {
    return (<div style={divStyle}>No posts yet.</div>);
  }

  return (<div style={divStyle}>
    <h2>
      {post.title}
    </h2>
    <em>
      Publié le : {post.created_at}
    </em>
    <b>
      Likes : {post.likes}
    </b>
    <p>
      {post.description}
    </p>
    <p>
      {post.content}
    </p>
  </div>)
}

export default Post;
