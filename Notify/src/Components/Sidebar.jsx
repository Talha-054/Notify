import React from 'react'
import { NavLink } from 'react-router-dom'
import { userContext } from './contexts/UserContext'
import { useContext } from 'react'

function Sidebar() {

    let [user, setUser] = useContext(userContext);

    function bugReport(){
        console.log(user)
    }


    return (
        <>
            <div className="sidebar-container lg:w-1/12 w-1/6  bg-gradient-to-b from-slate-900 to-slate-700 h-[90svh] flex flex-col-reverse ">

                <div className='h-full w-full flex flex-col-reverse justify-evenly'>

                    <section className='w-full h-1/6 flex justify-center items-center'>
                        <p onClick={bugReport} className='h-1/2 w-2/3 flex justify-center items-center text-3xl sm:text-5xl hover:scale-125 duration-200 hover:cursor-pointer'>🐞</p>
                    </section>

                    
                    <section className='w-full h-1/6 flex justify-center items-center '>
                        <p className='h-1/2 w-2/3 flex justify-center items-center text-3xl sm:text-5xl hover:scale-125 duration-200 hover:cursor-pointer'><NavLink to="/Notes">📂</NavLink></p>
                    </section>


                    <section className='w-full h-1/6 flex justify-center items-center'>
                        <p className='h-1/2 w-2/3 flex justify-center items-center text-3xl sm:text-5xl hover:scale-125 duration-200 hover:cursor-pointer'><NavLink to="/Edit-notes">📝</NavLink></p>
                    </section>


                    <section className='w-full h-1/6 flex  justify-center items-center'>
                        <p className='h-1/2 w-2/3 flex justify-center items-center text-3xl sm:text-5xl hover:scale-125 duration-200 hover:cursor-pointer'><NavLink to="/add-note">📩</NavLink></p>

                        {/* <div className="add-task w-full h-1/2 bg-yellow-500 flex justify-center items-center text-blue-100 hover:font-extrabold hover:cursor-pointer duration-100  font-sans">📩 Add New Task</div> */}
                    </section>

                </div>
               
            </div>
        </>
    )
}

export default Sidebar
