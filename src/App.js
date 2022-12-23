import Note from './Note/Note';
import './App.css';
import React , { Component } from 'react';
import Hisnote from './HisNotes/Hisnote';

class  App extends Component {


  state = {
    notes: [
      {title: 'hello' , note: 'm tryinngggg'}
    ]
  }




  onclickhandler = () => {

      
  }


  render () {
    return (
      <div className="App">
        <h1>Notes</h1>
        <Note click={this.onclickhandler}/>
        <Hisnote title={this.state.notes[0].title}  note={this.state.notes[0].note} />
      </div>
    );
  }

}

export default App;
