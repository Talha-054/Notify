import React from 'react'
import Home from './Home';
import { useState, useContext } from 'react';
import { noteContext } from '../contexts/noteContext';
import { nanoid } from 'nanoid'

function Add() {

    let screenSize = window.innerWidth;
    const [text, updateText] = useState("");
    const [title, updateTitle] = useState("");
    const [notes, setNotes] = useContext(noteContext);
   

    
    
    function handleTitleChange(e){
        updateTitle(e.target.value);
    }

    function handleTextChange(e){
        updateText(e.target.value);
    }

    function saveNote(){
        if (!title || !text ) return;
        let identity = nanoid(5);
        let note = {
            id: identity,
            heading: title,
            para: text,
            edit: false
        }
        setNotes((prevNotes)=> [...prevNotes, note]);
        updateTitle("");
        updateText("");
    }

    return (

        <>
            <Home />
            <div className='absolute h-[35svh] w-1/3 top-[45vh] left-[37vw]  lg:left-1/3 rotate-1 z-10'>
                <input type="text" maxLength={screenSize<640? 20:24} value={title} onChange={handleTitleChange} placeholder='Title' className='h-1/6 rounded-xl bg-[#90e0ef] placeholder-black px-4 w-full ' />

                <textarea maxLength={screenSize<640? 70:300} onChange={handleTextChange} placeholder='Start Adding' className='h-5/6 resize-none mt-4 rounded-xl bg-[#00b4d8] placeholder-black  max-h-[14.5rem] overflow-hidden w-full p-4' rows="7" value={text} ></textarea>

                <button onClick={saveNote} className=' px-4 py-1    text-white font-light bg-blue-600 rounded-xl hover:bg-blue-700  '>Save</button>
            </div>
        </>
    )
}

export default Add
