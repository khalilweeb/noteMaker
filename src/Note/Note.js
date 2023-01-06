import { useState } from 'react';
import './note.css';


const MakeNote = props => {



const [note, setNote] = useState({
    title: '',
    content : ''
});


const eventChangeHandler = (event) => {

    let newNote = event.target
    setNote({
        ...note,
        [newNote.name]: newNote.value

    })


    

}

const onSubmit = (event) => {
    props.onAdd(note);//sending the note state with props
    setNote({
        title: '',
        content : ''
    })
    event.preventDefault();

}

    return (
        <div className="note"> 
            <h2>title</h2>
            <input name='title' type='text'  placeholder='Title' onChange={eventChangeHandler} value={note.title} />
            <h3>Note</h3>
            <input name='content' type='text' placeholder='note' onChange={eventChangeHandler} value={note.content} />
            <button  onClick={onSubmit}>Go</button>
        </div>

    )


}


export default MakeNote;