import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, deleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          text={note.text}
          date={note.time}
          id={note.id}
          deleteNote={deleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
