
import React, { useState } from 'react';
import axios from 'axios';

const Comment = ({ comment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(comment.content);

  const handleEdit = () => {
    axios.put(`/api/comments/${comment.id}/`, { content })
      .then(() => setIsEditing(false))
      .catch(error => console.error(error));
  };

  const handleDelete = () => {
    axios.delete(`/api/comments/${comment.id}/`)
      .then(() => window.location.reload())
      .catch(error => console.error(error));
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      ) : (
        <p>{content}</p>
      )}
      {isEditing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Comment;
