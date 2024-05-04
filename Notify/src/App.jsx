import React from "react"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Sidebar from "./Components/Sidebar"
import { Outlet } from "react-router-dom"
import Add from "./Components/Add"
import {NoteProvider} from "./contexts/noteContext"





function App() {
  

  console.log(NoteProvider)

  return (
    <NoteProvider>
      <Navbar />
      <Sidebar />
      <Home />
      <Outlet />
    </NoteProvider>
  )
}

export default App
