import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Comment from './Comment';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`/api/comments/?post=${postId}`)
      .then(response => setComments(response.data))
      .catch(error => console.error(error));
  }, [postId]);

  return (
    <div>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
