import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      {name: 'Mayur', age: 28},
      {name: 'Maya', age: 29},
      {name: 'Manu', age: 30},
      {name: 'Max', age: 31},
      {name: 'Matt', age: 32}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Well this is working</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Reading</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
        <Person name={this.state.persons[4].name} age={this.state.persons[4].age} />
      </div>      
    );
  
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));

  }
}

export default App;
