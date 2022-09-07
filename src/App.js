import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

var today = new Date();

const App = () => {
  const [notes, setState] = useState([
    {
      id: nanoid(),
      text: "Sample Note",
      time: today.toLocaleDateString(),
    },
    {
      id: nanoid(),
      text: "Sample Note 2",
      time: today.toLocaleDateString(),
    },
  ]);

  const addNote = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
      time: today.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setState(newNotes);
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setState(filteredNotes);
  };

  const [searchText, setSearchState] = useState("");

  useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app-data"));
    if (savedNotes) {
      setState(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <Header />
      <div id="container">
        <Search search={setSearchState} />
        <NotesList
          notes={notes.filter((note) => {
            return note.text.toLowerCase().includes(searchText);
          })}
          handleAddNote={addNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
