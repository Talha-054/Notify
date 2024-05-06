import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { userContext } from './contexts/UserContext'
import { useState, useContext } from 'react'


function Home() {

    const screenSize = window.innerWidth;
    let [user, setUser] = useContext(userContext);

    useEffect(()=>{
        console.log("user value updated")
    },[user])

    return (
        <>
            
            <div className="img">
                <img className=' w-5/6 h-[90svh]  absolute bottom-0 right-0 lg:w-11/12' src={screenSize<640? "/assets/bg4.jpg" : "/assets/bg.jpg"} alt="Notes image" />
                <div className='absolute '></div>
            </div>
           

            
        </>
    )
}

export default Home
