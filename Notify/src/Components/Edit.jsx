import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { noteContext } from './contexts/NoteContext'
import { userContext } from './contexts/UserContext';


function Edit() {

    const [notes, setNotes] = useContext(noteContext);
    let [user, setUser] = useContext(userContext);

    let updatedNotes = JSON.parse(JSON.stringify(notes));


    useEffect(()=>{
        if(user.LoggedIn){
            let updatedUser = (JSON.parse(localStorage.getItem("users")))
            for (let item of updatedUser){
                if (item.id == user.id){
                    item.data = JSON.parse(JSON.stringify(notes));
                }
            }
            localStorage.setItem("users", JSON.stringify(updatedUser))
        }
    },[notes])




    function handleEditText (e){
        let eventId = e.target.id; 
        updatedNotes.map((note)=>{
            note.id == eventId ? note.edit = true : note
        })
        setNotes(updatedNotes);

    }

    function deleteNote (e){
        let eventId = e.target.id;
        let newArr = updatedNotes.filter((note)=>{
            return eventId != note.id
        })
        updatedNotes =  JSON.parse(JSON.stringify(newArr));
        setNotes(updatedNotes)
    }

    function updateText (e){
        updateText = e.target.value
    }

    function doneEditing (e){
        let eventId = e.target.id;
        updatedNotes.map((note)=>{
            if (note.id == eventId){
                note.edit = false
                note.para = updateText;
            }
        })
        setNotes(updatedNotes)

    }

    return (
        <>
            <div className="main-container z-10 w-5/6 h-[90svh] bg-gradient-to-br from-slate-900 to-slate-700 lg:w-11/12 absolute bottom-0 right-0 overflow-auto flex flex-wrap  justify-center">


                {notes.map((note)=>{
                    return (
                        <>
                            <div id={note.id} className=' m-4 rounded-xl bg-[#F0DE36] w-2/3 min-w-[260px]  h-3/6 max-w-[430px] p-4 flex flex-col shadow shadow-[#F0DE36]'>
                                <p className='w-full h-1/6 bg-[#C6EBC5] flex justify-center font-extrabold items-center overflow-auto'>{note.heading}</p>
                                {note.edit? (
                                    <textarea id={note.id} onChange={updateText}   className='w-full h-4/6  mt-2 bg-[#FEFDED] p-1 px-2' placeholder='Note' >{note.para}</textarea>
                                ) : (
                                    <textarea  readOnly  className='w-full h-4/6  mt-2 bg-[#FEFDED] p-1 px-2' placeholder='Note' >{note.para}</textarea>
                                )}
                                <div className="edit w-full h-1/6 mt-2 bg-[#FA7070] flex">
                                    <div className=" w-1/2 flex justify-start items-center"></div>
                                    <div className="icons w-1/2 flex justify-evenly items-center">
                                        <div id={note.id} onClick={handleEditText}  className="edit hover:scale-150 duration-200 hover:cursor-pointer">✏️</div>
                                        <div id={note.id}  onClick={deleteNote} className="delete hover:scale-150 duration-200 hover:cursor-pointer">❌</div>
                                        <div id={note.id} onClick={doneEditing} className="save hover:scale-150 duration-200 hover:cursor-pointer">✔️</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}

                           
                
                
            </div>
        </>
    )
}

export default Edit
