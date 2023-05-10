import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io';
import {v4 as uuid} from 'uuid';
import useCreateDate from '../hooks/useCreateDate.jsx'

const CreateNote = ({setNotes}) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title && details) {
      const note ={id: uuid(), title, details, date};
      setNotes((prevNotes => [note, ...prevNotes]))
      console.log(note);
      navigate('/');
    }
  }
  return (
    <section className='create-note'>
      <header className="create-note__header">
        <Link to='/' className="btn" ><IoIosArrowBack/></Link>
        <button className='btn lg primary' onClick={handleSubmit}>Save</button>
      </header>
      <form className='create-note__form'>
        <input type="text" 
               placeholder='Title' 
               autoFocus
               value={title}
               onChange={({target}) => setTitle(target.value)} />
        <textarea rows="28"
               placeholder='Note details...'
              value={details}
               onChange={({target}) => setDetails(target.value)}/>
      </form>
    </section>
  )
}

export {CreateNote} 