import Note from './Note/Note';
import './App.css';
import React , { Component } from 'react';

class  App extends Component {


  render () {
    return (
      <div className="App">
        <h1>Notes</h1>
        <Note/>
      </div>
    );
  }

}

export default App;
