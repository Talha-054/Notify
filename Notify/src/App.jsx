import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Sidebar from "./Components/Sidebar"
import { Outlet } from "react-router-dom"
import {NoteProvider} from "./Components/contexts/NoteContext"
import { UserProvider } from "./Components/contexts/UserContext"





function App() {


  return (
    <UserProvider>
      <NoteProvider>
      
        <Navbar />
        <Sidebar />
        <Home />
        <Outlet />
      
      </NoteProvider>
    </UserProvider>
  )
}

export default App
