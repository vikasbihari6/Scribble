import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
const Form = (props) => {

  const [formData,setFormData] = useState({
    title:'',
    content:''
  })
  const addNotes = (e) =>{
    if(formData.title !== '' && formData.content !== ''){
        props.addNote(formData);
		setFormData({
			title: '',
			content: ''
		});
    }
    e.preventDefault();
  }
  const formInputChangeHandler = (event) =>{
     const newValue = event.target.value;
     const newName  = event.target.name;

     if(newName === 'title'){
        setFormData({...formData,title:newValue})
     }else if (newName === 'content'){
        setFormData({...formData,content:newValue})
     }
  }
  return (
    <React.Fragment>
        <form className='create-note'>
            <input  
               onChange={formInputChangeHandler}
               name="title"
			   value={formData.title}
			   placeholder="enter some title"
            />
            <textarea
               onChange={formInputChangeHandler}
               name = "content"
               value={formData.content}
               rows={3}
               placeholder='enter some content'
            />
             <Fab onClick={addNotes}>
					<AddIcon />
				</Fab>
        </form>
    </React.Fragment>
  )
}

export default Form