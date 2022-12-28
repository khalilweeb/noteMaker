import Note from './Note/Note';
import './App.css';
import React , { Component } from 'react';
import Hisnote from './HisNotes/Hisnote';

class  App extends Component {


  state = {
    notes: []
  }

  addNote = (note) => {
 
      let old = this.state.notes;
      this.setState({
        notes: [...old, note]
      })
   
  }





  render () {
    const allNotes =  (
      <div style={{display:'flex'}}>
        {this.state.notes.map((note ,index ) => {
  
          return <Hisnote  title={note.title} content={note.content} key={index} />
  
        })}
      </div>
    )
    return (
      <div className="App">
        <h1>Notes</h1>
        <Note onAdd={this.addNote}/>
        <Hisnote  title='{note.title}' content='ehehhee'  />
        {allNotes}
      </div>
    );
  }

}

export default App;
