import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Add from './Components/Add.jsx'
import Edit from './Components/Edit.jsx'
import Notes from './Components/Notes.jsx'
import Login from './Components/Login.jsx'
import SignIn from './Components/SignIn.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/add-note",
        element: <Add />
      },
      {
        path: "/Notes",
        element: <Notes />
      },
      {
        path: "/Edit-notes",
        element: <Edit />
      },
      {
        path: "/Login",
        element: <Login />
      },
      {
        path: "/Sign-In",
        element: <SignIn />
      }
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
