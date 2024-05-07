import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { userContext } from './contexts/UserContext'
import { useState, useContext } from 'react'
import { nanoid } from 'nanoid'

function Login() {

    let [username, setUsername] = useState();
    let [password, setPassword] = useState();
    let [user, setUser] = useContext(userContext)

    let passwordField = useRef()
    let usernameField = useRef()

    let userCreds = [];


    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleCreds (){
        
        userCreds = {
                name: username,
                key: password,
                LoggedIn: false,
                id: nanoid(10),
                data: []
            }

        if (user.length >= 2){
            passwordField.current.value = "";
            usernameField.current.value = "";
            alert("You ran out of Storage, max 02 accounts allowed per device ⛔")
            return
        }

        setUser(prev => [...prev, userCreds])
    }

    function accActivation(){
        if (user.length <= 2){
            localStorage.setItem("users", JSON.stringify(user))
        }
        alert("✅, Proceed to Login")
    }





   

    return (
        <>
            <div className="main-container z-20 w-[100vw] h-[100svh] bg-white absolute overflow-auto top-0 flex items-start justify-center ">

                <div className="sign-in-conatiner mt-4 min-w-[300px]">

                    <div className="img-container  flex justify-center items-center">
                        <img className="h-16 w-20 mt-4" src="./assets/title.svg" alt="Notify logo"/>
                    </div>

                    <p className="text-start mt-5 ml-6 m-4 font-medium text-3xl">Sign In</p>

                    <p className="ml-6 mb-0.5 font-medium">Set Username</p>
                    <input ref={usernameField} onChange={handleUsername} className="ml-6 px-1 mb-4 w-10/12 border-[0.5px] border-[#bfbbbb] rounded-[4px] h-8" type="text"></input>
                    <p className="ml-6 mb-0.5 font-medium">Set Password</p>
                    <input ref={passwordField} onChange={handlePassword} className="ml-6 mb-4 px-1 w-10/12 border-[0.5px] border-[#bfbbbb] rounded-[4px] h-8" type="password"></input>
                    <button onClick={handleCreds} className="mb-6 bg-[#FFEF06] hover:bg-[#ffd814] ml-6 w-10/12 rounded-lg p-1 shadow-sm shadow-[#565959]">Submit</button>

                    <p className="ml-6 mb-5 text-[12px]">By continuing, you agree to notify's <a href="#" className="text-blue-900">Conditions of</a><br /><a href="#" className="text-blue-900">Use</a> and <a href="#"  className="text-blue-900">privacy Notice</a></p>

                    <p className=" mb-5 ml-5"><a href="#" className="text-blue-900 text-[13px]"><i className="fa-solid fa-caret-right mr-2 text-[10px] text-[#565959] "></i>Need help?</a></p>

                    <div className="hr-line w-10/12 flex justify-center items-center h-[0.08px] mb-4 bg-[#D2CECE] ml-6"></div>

                    <p className="ml-6 mb-3 text-[13px] font-semibold">Using for work?</p>
                    <p className="ml-6 text-[13px] mb-4 "><a href="#" className="text-blue-900">Stay tuned for new features</a></p>     



                    <div className="hr-break flex justify-center items-start ">
                        <div className="flex justify-center items-center  w-5/6 ">
                            <hr className="flex-grow border-t-2"/>
                            <p className="m-2 text-[#767676] text-[12px]">New to Notify?</p>
                            <hr className="flex-grow border-t-2"/>
                        </div>
                    </div>  



                    <div className="button-container flex justify-center items-center mb-5">
                        <NavLink to="/">
                            <div className="w-[252px]">
                                <button onClick={accActivation} className="w-full text-[#0f1111] text-[13px] border-2 shadow-sm shadow-[#E1DADA] rounded-lg p-1">create account </button>
                            </div>
                        </NavLink>    
                    </div>



                    <footer className="bg-[#FAF6F6] absolute bottom-0 right-0 w-full ">

                        <hr className="mb-4 shadow-2xl shadow-black"/>

                        <div className="footer flex justify-center items-center">
                            <div className="w-3/12 min-w-[300px] flex justify-evenly mb-3">
                                <a className="text-blue-900 text-[11px]">Conditions of use</a>
                                <a className="text-blue-800 text-[11px]">Privacy Notice</a>
                                <a className="text-blue-900 text-[11px]">Help</a>
                            </div>
                        </div>

                        <div className="copyright flex justify-center items-center">
                            <div className="w-5/6  min-w-[300px] flex justify-evenly">
                                <p className="text-[12.5px] mb-8 text-[#555555]">&copy; 2024 notify-free.vercel.app, Inc. or it's affiliates</p>
                            </div>
                        </div>

                    </footer>



                </div>              
            </div>
        </>
    )
}

export default Login
