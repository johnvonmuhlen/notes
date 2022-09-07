import React, { useState } from "react";

const Note = (props) => {
  const handleDelete = () => {
    props.deleteNote(props.id);
  };

  return (
    <div className="note">
      <p>{props.text}</p>
      <div className="note-footer">
        <span id="date">{props.date}</span>
        <i class="fa-regular fa-trash-can" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default Note;
