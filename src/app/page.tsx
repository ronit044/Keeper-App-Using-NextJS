"use client"
import InputForm from "@/components/input_note/inputForm";
import Output_note from "@/components/output_note/output_note";
import { useState } from "react";
import { allNotes, notesType } from "@/data/notes";
export default function Home() {
  const [addNote, setAddNote] = useState(false);
  const [notes, setNotes] = useState<notesType[]>(allNotes);

  const handleChange = () => {
    setAddNote(!addNote);
  };
  

  const handleAddNote = async(newNote: notesType) => {
    await setNotes([...notes,{...newNote,id:notes.length+1}]);
    console.log(notes);
  };

  const handleNoteDelete = async(id: Number) => {
    setNotes(notes.filter((note) => note.id !== id));
  }

  const handleNoteUpdate = (id: Number, changedTitle: string, changedDesc: string) => {
    setNotes(notes.map(note => note.id === id ? {...note, title: changedTitle, Description: changedDesc} : note));
  };


  return (
    <div className="overflow-hidden">
      <div className={`ml-5 mr-5 mt-5 ${addNote ? "blur-md" : null} overflow-hidden`}>
        <button
          className="ml-5 px-5 py-2 text-base outline-none border-none rounded-2xl transition duration-500 bg-gray-800  hover:scale-10 text-yellow-500 shadow-lg "
          onClick={handleChange}
        >
          + Add Task
        </button>
        {notes.length === 0 ? (
          <div className="absolute top-0 left-0 z-[-1]">
            <div className="w-screen h-screen flex justify-center items-center text-gray-500 ">
              No Notes Created :(
            </div>
          </div>
        ) : null}
        <div className="absolute overflow-hidden left-0  w-full sm:flex sm:justify-center sm:items-center md: lg: xl: 2xl:flex 2xl:justify-start 2xl:items-start 2xl:pl-5">
        <div className="grid 2xl:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-5 pr-5 pl-5">
          {notes.map((note) => (
            <Output_note
              key={String(note.id)}
              title={note.title}
              description={note.Description}
              id={note.id}
              handleDelete={handleNoteDelete}
              handleNoteUpdate={handleNoteUpdate}
              />
          ))}
        </div></div>
      </div>
      {addNote ? <InputForm closeOrOpen={handleChange} addNote={handleAddNote} /> : null}
    
    </div>
  );
}
