"use client"
import React, { useState } from 'react';
import './main.css';
import { notesType } from '@/data/notes';

export default function InputForm({ closeOrOpen, addNote }: { closeOrOpen: () => void, addNote:(note:notesType)=>void }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleChange = (e: any) => {
        e.target.id === 'title' ? setTitle(e.target.value) : setDescription(e.target.value);
    }
    const handleSubmit = () => {
        const newNote: notesType = {
            id: 0,
            title: title,
            Description: description
        }
        addNote(newNote); 
        closeOrOpen();
    }
    return (
        <div className='flex flex-col items-center justify-center h-screen absolute top-0 left-0 w-screen'>
          <div className='border-black bg-white border-2  shadow-yellow-600 shadow-lg rounded-xl relative 2xl:w-1/5 sm:w-3/5 md:w-2/6 lg:w-1/4'>

                <div className='w-full'>
                    <div className='flex justify-end w-full h-full pt-2 pr-2'>
                        <button className='bg-black hover:bg-red-600 text-xs pt-1 pb-1 pl-3 pr-3 text-white flex justify-center items-center rounded-md' onClick={closeOrOpen}>X</button>
                    </div>
                </div>
                <div className='flex flex-col p-4 w-full'>
                    <form className="form" onSubmit={handleSubmit}>
                        <p className="title text-lg w-full font-semibold">Create Task</p>
                        <label htmlFor='title' className="mb-4">
                            <input id='title' value={title} className='border-b-2 border-black focus:border-yellow-500 focus:border-b-2 w-full' style={{ outline: 'none' }} type="text" placeholder='Title' onInput={handleChange} required />
                        </label>
                        <label htmlFor='Description' className="mb-4">
                            <textarea id='Description' value={description} className='border-b-2 border-black focus:border-yellow-500 focus:border-b-2  w-full' style={{ outline: 'none', resize: 'none', scrollMargin: "2px" }} placeholder='Description' onInput={handleChange} required />
                        </label>
                        <div className='flex justify-center items-center'>
                            <button type='submit' className='bg-black text-yellow-500 hover:text-white hover:bg-yellow-500 w-12 h-12 rounded-full flex justify-center items-center'>+</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
