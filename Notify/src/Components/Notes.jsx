import React from 'react'
import { useContext } from 'react'
import { noteContext } from '../contexts/noteContext'




function Notes() {

    const [notes, setNotes] = useContext(noteContext);
    
    





    return (
        <>
            
            <div className="main-container z-10 w-5/6 h-[90dvh] bg-gradient-to-br from-slate-900 to-slate-700 lg:w-11/12 absolute bottom-0 right-0 overflow-auto flex flex-wrap  justify-center">

                {notes.map((note)=>{
                    return (
                        <>
                            <div id={note.id} className=' m-4 rounded-xl bg-[#F0DE36] w-2/3 top-[40vh] h-3/6 max-w-[430px] p-4 flex flex-col  shadow-md shadow-[#F0DE36]'>
                                 <p className='w-full h-1/6 p-6 bg-[#FA7070] flex justify-center text-black font-extrabold  items-center '>{note.heading}</p>
                                 <textarea readOnly placeholder='some test' value={note.para} className='w-full h-5/6 mt-2 bg-[#FEFDED] p-2  text-black'></textarea>
                            </div>
                        </>
                    )
                })}

              
                
            </div>
        </>
    )
}

export default Notes
