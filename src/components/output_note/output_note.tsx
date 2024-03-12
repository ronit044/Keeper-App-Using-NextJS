"use client"
import { useState } from "react";
import { FaTrash, FaPen } from "react-icons/fa";
import { notesType,allNotes } from "@/data/notes";
const Output_note = ({ title, description, id, handleDelete, handleNoteUpdate }: { title: string, description?: string, id: Number, handleDelete: (id: number) => void, handleNoteUpdate:(id: Number, changedTitle: string, changedDesc: string)=>void }) => {
    const [editTitle, setEditTitle] = useState(title);
    const [editDescription, setDescription] = useState(description ?? "");
    const [edit, setEditNote] = useState(true);
    const Editable = (e:any) => {
        e.preventDefault();
        setEditNote(!edit);
        if (!edit) {
            handleNoteUpdate(id, editTitle, editDescription);
        }
    }
    const handleEdit = (e:any) => {
            e.target.id === 'title' ? setEditTitle(e.target.value) : setDescription(e.target.value);
        
    }
    return <div>
        <div className='' >
            <div className='border-black border-2 sm:w-6/7 shadow-yellow-600 shadow-lg rounded-xl relative ' >
                <div className='w-full'>
                    <div className='flex justify-end w-full h-full pt-2 pr-2 '>
                        <button className='bg-black hover:bg-red-600  text-xs pt-2 pb-2 pl-2 pr-2 text-white flex justify-center items-center rounded-md' onClick={() => handleDelete(Number(id))} >
                            <FaTrash />
                        </button>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <form className="form " >
                        <p className="title">Task: {String(id)}</p>
                        <label htmlFor='title'>
                            <div className=" text-yellow-800 ">Title:</div>
                            <input
                                id='title'
                                value={editTitle}
                                className='border-b-2 border-black focus:border-yellow-500 focus:border-b-2 w-full'
                                style={{ outline: 'none' }}
                                type="text"
                                placeholder='Title'
                                disabled={edit ? true : false}
                                required={edit ? false : true}
                                onInput={handleEdit}
                            />

                        </label>
                        <label htmlFor='Description'>
                            <div className=" text-yellow-800 ">Description:</div>
                            <textarea id='Description' className='border-b-2 border-black  focus:border-yellow-500 focus:border-b-2 h-3/5 w-full' value={editDescription ?? "No Description"} style={{ outline: 'none', resize: 'none', scrollMargin: "2px" }} placeholder='Description' disabled={edit ? true : false}
                                required={edit ? false : true}
                                onInput={handleEdit}
                                />
                                
                        </label>

                        <div className='flex justify-center items-center'>
                            <button className='bg-black text-yellow-500 hover:text-white hover:bg-yellow-500 w-12 h-12 rounded-full flex justify-center items-center' onClick={Editable}><FaPen /></button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default Output_note;

