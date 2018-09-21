import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      {name: 'Mayur', age: 28},
      {name: 'Maya', age: 29},
      {name: 'Manu', age: 30},      
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked!');
    //Don't Do THIS: this.state.persons[0].name = 'Mayur K';
    this.setState( {
      persons: [
        {name: newName, age: 28},
        {name: 'May', age: 35},
        {name: 'Mann', age: 25}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Mayur Kr', age: 28},
        {name: event.target.value, age: 35},
        {name: 'Mann', age: 22}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Well this is working</p>
        <button onClick={() => this.switchNameHandler('Mayur Kr')} >Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Mayur K')}
        changed={this.nameChangedHandler} >My Hobbies: Reading</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>      
    );
  
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));

  }
}

export default App;
