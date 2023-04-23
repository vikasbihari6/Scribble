import Headers from "./components/Headers";
import Footer from "./components/Footer";
import { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
function App() {
 
  const [notes,setNotes] = useState([]);

  const addNote = (note) =>{
    setNotes([...notes,note])
  }
  const deleteNote = (uniqueId) =>{
    const newArr = notes.filter((ele, idx) => {
			return idx !== uniqueId;
		});
		setNotes(newArr);
  }
  return (
   <> 
      <Headers/>
      <Form addNote={addNote}/>
       {notes.map((ele,idx)=>{
           return(
            <List key={idx} title = {ele.title} content={ele.content} deleteNote={deleteNote} uniqueId={idx}/>
           )
       })}
       
      <Footer/>
   </>
  );
}

export default App;