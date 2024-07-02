import React from 'react';
import CommentList from './CommentList';

const Post = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <CommentList postId={post.id} />
    </div>
  );
};

export default Post;
