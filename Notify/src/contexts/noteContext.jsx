import { useContext, createContext, useState } from "react";



export const noteContext = createContext([])


export  function NoteProvider ({children}){

    const [notes, setNotes] = useState([]);

    return (
        <noteContext.Provider value={[notes, setNotes]}>
            {children}
        </noteContext.Provider>
    )
}

