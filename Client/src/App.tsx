import React ,{useEffect, useState}from "react"
import './App.css';
import {Note} from "./models/note"


function App() {
  const [notes, setNotes]=useState<Note[]>([])

  useEffect(()=>{
    const getNotes = async()=>{
      try {
        const response =await fetch("/api/notes")
        const notesData = await response.json()
        setNotes(notesData)
        
      } catch (error) {
        console.log(error)
        alert(error)
      }
    }
    getNotes()
  },[])

  return (
    <div className="App">
{JSON.stringify(notes)}
     
     
    </div>
  );
}

export default App;
