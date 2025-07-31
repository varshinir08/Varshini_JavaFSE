import React from 'react';

function Post(props) {
  return (
    <div className="post">
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  );
}

export default Post;
