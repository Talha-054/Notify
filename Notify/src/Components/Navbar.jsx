import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';

import { userContext } from './contexts/UserContext';

function Navbar() {


    let [user,setUser] = useContext(userContext);
    

    function LogOut (){
        user.LoggedIn = false;
        setUser(prev=> ({...prev, "LoggedIn": false}))
    }

    return (
        <>
            <div className="nav-container border-none w-full h-[10svh]  bg-gradient-to-r from-slate-900 to-slate-700 flex">

                <section className='user-section border-none  h-full w-3/6 sm:w-4/12 lg:w-1/6 flex justify-start items-center'>
                    <div className="user-profile h-5/6 mx-1 sm:mx-4 lg:mx-8 rounded-full bg-white aspect-square"></div>
                    <p className='text-slate-50 text-base '>{user.LoggedIn? ((user.name).charAt(0).toUpperCase() + (user.name).slice(1)): "Guest"}</p>
                </section>

                <section className='flex flex-col-reverse lg:flex-row w-3/6 sm:w-8/12 lg:w-5/6 h-full'>


                    {/* <div className="search-bar  h-1/2 lg:h-full lg:w-4/6 lg:justify-center flex justify-end items-center ">
                        <p  className='hover:scale-125  duration-200 lg:text-3xl cursor-pointer pb-1 px-1 sm:px-2'>🕵</p>
                        <input type='text' placeholder='Search notes by Title'className='mx-2 w-[208px] min-w-[163px] sm:w-4/6 rounded-lg p-1 '></input>
                    </div> */}
                                    {/* Seacrh notes featurr to be added later */}

                    <div className="add-area  h-full lg:h-full w-full flex justify-end  items-center">
                        <div className="button-container  max-w-[150px] min-w-[70px] w-2/6 mx-2 h-4/6">

                            {user.LoggedIn? (
                                <button onClick={LogOut} className=' w-full h-full max-w-[150px] min-w-[70px] px-1  bg-blue-600 text-yellow-200 rounded-md hover:bg-blue-700 hover:cursor-pointer ' >Log Out</button>
                            ):(
                                <NavLink to="/Login">
                                    <button className=' w-full h-full max-w-[150px] min-w-[70px] px-1  bg-blue-600 text-yellow-200 rounded-md hover:bg-blue-700 hover:cursor-pointer ' >Log In</button>
                                </NavLink>
                            )}
                            
                        </div> 

                        {/* <button className=' w-2/6 h-4/6 max-w-[150px] min-w-[70px] px-1 bg-blue-600 text-yellow-200 rounded-md  hover:bg-blue-700 hover:cursor-pointer  mx-2 lg:mx-4 '>Sign Up</button> */}

                                        {/* sign up to be added later */}
                    </div>
                </section>
                
            </div>
        </>
    ) 
}

export default Navbar
