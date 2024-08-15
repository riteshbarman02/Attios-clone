// src/components/EditableNoteNode.jsx
import React, { useState } from 'react';
import { Handle } from 'reactflow';
import './EditableNoteNode.css';

const EditableNoteNode = ({ data }) => {
  const [title, setTitle] = useState(data.title || 'Write a note...');
  const [author, setAuthor] = useState(data.author || 'ABHINAV GUPTA');
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    // Optionally, update the data prop here
  };

  return (
    <div className="editable-note-node">
      {isEditing ? (
     <div>
           <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          onBlur={handleBlur}
          autoFocus
          className="editable-note-input"
        />
     </div>
      ) : (
        <div className="editable-note-title" onClick={() => setIsEditing(true)}>
          {title}
        </div>
      )}
      <div className="editable-note-author">{author}</div>
    </div>
  );
};

export default EditableNoteNode;
