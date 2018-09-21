import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Well this is working</p>
        <Person name="Mayur" age="28"/>
        <Person name="Maya" age="29">My Hobbies: Reading</Person>
        <Person name="Manu" age="30"/>
      </div>      
    );
  
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));

  }
}

export default App;
