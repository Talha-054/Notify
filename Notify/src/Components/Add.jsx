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
            {screenSize < 640? (
                
                    <>
                        <div className="main-container z-10 w-5/6 h-[90svh] bg-gradient-to-br from-slate-900 to-slate-700 lg:w-11/12 absolute bottom-0 right-0 overflow-auto flex flex-wrap  justify-center ">     
                                <>
                                    <div  className=' my-auto mx-3 rounded-xl bg-[#F0DE36] w-full min-w-[230px]  h-[85svh] max-w-[430px] p-4 flex flex-col  shadow-md shadow-[#F0DE36]'>
                                        <input type="text" maxLength={screenSize<640? 10:24} value={title} onChange={handleTitleChange} placeholder='Title'  className='w-full h-[75px] p-4 bg-[#FA7070] flex justify-center items-center text-black font-extrabold placeholder-black '></input>
                                        <textarea  onChange={handleTextChange} placeholder='Start Adding'  className='w-full h-5/6 mt-2 mb-4 bg-[#FEFDED] p-2  text-black' value={text}></textarea>
                                        <div className="button-container w-full flex justify-center items-center ">
                                            <button onClick={saveNote} className=' py-1 w-1/2    text-white font-light bg-blue-600 rounded-xl hover:bg-blue-700  '>Save</button>
                                        </div>
                                        
                                    </div>
                                </>
                        </div>
                    </>                
            ):(
               <>   
                    <Home />
                    <div className='absolute h-[35svh] w-1/3 top-[45vh] left-[37vw]  lg:left-1/3 rotate-1 z-10'>
                        <input type="text" maxLength={screenSize<640? 10:24} value={title} onChange={handleTitleChange} placeholder='Title' className='h-1/6 rounded-xl bg-[#90e0ef] placeholder-black px-4 w-full ' />

                        <textarea  onChange={handleTextChange} placeholder='Start Adding' className='h-5/6 resize-none mt-4 rounded-xl bg-[#00b4d8] placeholder-black  max-h-[14.5rem] overflow-hidden w-full p-4' value={text} ></textarea>

                        <button onClick={saveNote} className=' px-4 py-1    text-white font-light bg-blue-600 rounded-xl hover:bg-blue-700  '>Save</button>
                    </div>
               </>
            )}
        </>
    )
}

export default Add
