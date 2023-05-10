import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { NoteItem } from '../components/index.js';
import {CiSearch} from 'react-icons/ci';
import {MdClose} from 'react-icons/md';
import {BsPlusLg} from 'react-icons/bs';


const Notes = ({notes}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('');
  const [filterNotes, setFilterNotes] = useState(notes);

  const handleSearch = () => {
          setFilterNotes(notes.filter(note => {
          if(note.title.toLowerCase().match(text.toLocaleLowerCase())) {
            return note;
          }
      }))
  }

  useEffect(handleSearch, [text])

  return (
    <section>
      <header className='notes__header'>
        {!showSearch && <h2 className='notes__title'>My notes</h2>}
        {showSearch && <input type="text" 
                              autoFocus 
                              placeholder='Keywords...'
                              value={text}
                              onChange={({target}) =>{setText(target.value); handleSearch()}} />}
        <button className='notes__search btn' onClick={()=> setShowSearch(prevState => !prevState)}>{showSearch ? <MdClose/> : <CiSearch/>}</button>
      </header>
      <div className="notes__container">
         {filterNotes.length == 0 && <p classname="emty__note">Note not found.</p>}
         {filterNotes.map(note => <NoteItem key={note.id} note={note}/>)}
      </div>
      <Link to='create-note' className="notes__add btn add__btn"><BsPlusLg/></Link>
    </section>
  )
}

export {Notes} 