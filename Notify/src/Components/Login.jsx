import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
    return (
        <>
            <div class="main-container z-20 w-[100vw] h-[100svh] bg-white absolute overflow-hidden top-0 flex items-start justify-center ">

                <div className="sign-in-conatiner mt-4 min-w-[300px]">

                    <div class="img-container  flex justify-center items-center">
                        <img class="h-16 w-20 mt-4" src="./assets/title.svg" alt="Notify logo"/>
                    </div>

                    <p class="text-start mt-5 ml-6 m-4 font-medium text-3xl">Login</p>

                    <p class="ml-6 mb-0.5 font-medium">Username</p>
                    <input class="ml-6 mb-4 w-10/12 border-[0.5px] border-[#bfbbbb] rounded-[4px] h-8" type="text"></input>
                    <p class="ml-6 mb-0.5 font-medium">Password</p>
                    <input class="ml-6 mb-4 w-10/12 border-[0.5px] border-[#bfbbbb] rounded-[4px] h-8" type="text"></input>

                    <div className="continue-button-container w-10/12 flex justify-center items-center">
                        <NavLink className="w-full" to="/">
                            <button class="mb-6 bg-[#FFEF06] hover:bg-[#ffd814] ml-6 w-full rounded-lg p-1 shadow-sm shadow-[#565959]">Continue</button>
                        </NavLink>
                    </div>
                       
                   
                    <p class="ml-6 mb-5 text-[12px]">By continuing, you agree to notify's <a href="#" class="text-blue-900">Conditions of</a><br /><a href="#" class="text-blue-900">Use</a> and <a href="#"  class="text-blue-900">privacy Notice</a></p>

                    <p class=" mb-5 ml-5"><a href="#" class="text-blue-900 text-[13px]"><i class="fa-solid fa-caret-right mr-2 text-[10px] text-[#565959] "></i>Need help?</a></p>

                    <div class="hr-line w-10/12 flex justify-center items-center h-[0.08px] mb-4 bg-[#D2CECE] ml-6"></div>

                    <p class="ml-6 mb-3 text-[13px] font-semibold">Using for work?</p>
                    <p class="ml-6 text-[13px] mb-4 "><a href="#" class="text-blue-900">Stay tuned for new features</a></p>     



                    <div class="hr-break flex justify-center items-start ">
                        <div class="flex justify-center items-center  w-5/6 ">
                            <hr class="flex-grow border-t-2"/>
                            <p class="m-2 text-[#767676] text-[12px]">New to Notify?</p>
                            <hr class="flex-grow border-t-2"/>
                        </div>
                    </div>  



                    <div class="button-container flex justify-center items-center mb-5">
                        <NavLink to="/Sign-In">
                            <div class="w-[252px]">
                                <button class="w-full text-[#0f1111] text-[13px] border-2 shadow-sm shadow-[#E1DADA] rounded-lg p-1">create Notify account (max 02)</button>
                            </div>
                        </NavLink>    
                    </div>



                    <footer class="bg-[#FAF6F6] absolute bottom-0 right-0 w-full ">

                        <hr class="mb-4 shadow-2xl shadow-black"/>

                        <div class="footer flex justify-center items-center">
                            <div class="w-3/12 min-w-[300px] flex justify-evenly mb-3">
                                <a class="text-blue-900 text-[11px]">Conditions of use</a>
                                <a class="text-blue-800 text-[11px]">Privacy Notice</a>
                                <a class="text-blue-900 text-[11px]">Help</a>
                            </div>
                        </div>

                        <div class="copyright flex justify-center items-center">
                            <div class="w-5/6  min-w-[300px] flex justify-evenly">
                                <p class="text-[12.5px] mb-8 text-[#555555]">&copy; 2024 notify-free.vercel.app, Inc. or it's affiliates</p>
                            </div>
                        </div>

                    </footer>



                </div>              
            </div>
        </>
    )
}

export default Login
