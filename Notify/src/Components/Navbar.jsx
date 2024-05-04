import React from 'react'

function Navbar() {
    return (
        <>
            <div className="nav-container border-none w-full h-[10vh]  bg-gradient-to-r from-slate-900 to-slate-700 flex">

                <section className='user-section border-none  h-full w-3/6 sm:w-4/12 lg:w-1/6 flex justify-start items-center'>
                    <div className="user-profile h-5/6 mx-1 sm:mx-4 lg:mx-8 rounded-full bg-white aspect-square"></div>
                    <p className='text-slate-50  text-base '>Username</p>
                </section>

                <section className='flex flex-col-reverse lg:flex-row w-3/6 sm:w-8/12 lg:w-5/6  h-full'>
                    <div className="search-bar  h-1/2 lg:h-full lg:w-4/6 lg:justify-center flex justify-end items-center">
                        <p className='hover:scale-125  duration-200 lg:text-3xl cursor-pointer pb-1 px-2'>🕵</p>
                        <input type='text' placeholder='Search notes by Title'className='p-1 mx-2 w-4/6 rounded-lg px-4'></input>
                    </div>
                    <div className="add-area  h-1/2 lg:h-full lg:w-2/6 flex justify-end lg:justify-end  items-center">
                        <button className='w- 2/6 h-4/6 px-1 bg-blue-600 text-yellow-200 rounded-md hover:bg-blue-700 hover:cursor-pointer sm:w-2/6  ' >Login</button>
                        <button className='w- 2/6 h-4/6 px-1 bg-blue-600 text-yellow-200 rounded-md  hover:bg-blue-700 hover:cursor-pointer sm:w-2/6 mx-2 lg:mx-4 '>Sign Up</button>
                    </div>
                </section>
                
            </div>
        </>
    )
}

export default Navbar
