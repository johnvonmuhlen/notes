import React, { useState } from "react";

const AddNote = (props) => {
  const charLimit = 200;

  const [noteText, setNoteText] = useState("");
  const [NotePlaceholder, setNotePlaceholder] = useState("Type to add a note");
  const [count, setCount] = useState(charLimit);

  const handleChange = (event) => {
    setCount(() => {
      return charLimit - event.target.value.length;
    });

    if (charLimit - event.target.value.length >= 1) {
      setNoteText(event.target.value);
    }
  };

  const handleClick = () => {
    if (noteText.trim().length > 0) {
      props.handleAddNote(noteText);
      setNoteText("");
      setNotePlaceholder("Type to add a note");
      setCount(200);
    } else {
      setNotePlaceholder("Note can't be empty");
    }
  };

  return (
    <div className="note add">
      <textarea
        placeholder={NotePlaceholder}
        id="input"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <span id="charRemaining">{count} remaining</span>
        <button type="submit" onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
