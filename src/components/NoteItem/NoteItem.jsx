import React from 'react';
import {Link} from 'react-router-dom';
import './NoteItem.css';

const NoteItem = ({note}) => {
  console.log(note);
  return (
    <Link to={`./edit-note/${note.id}`} className="note">
        <h4 className='note__title'>
              {note.title.length > 50 
                ? note.title.substr(0, 50) + '...' 
                : note.title}
            </h4>
        <p className='note__date'>{note.date}</p>
    </Link>
  )
}

export  {NoteItem} 