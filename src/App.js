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
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName1, newName2, newName3) => {
    //console.log('was clicked!');
    //Don't Do THIS: this.state.persons[0].name = 'Mayur K';
    this.setState( {
      persons: [
        {name: newName1, age: 28},
        {name: newName2, age: 35},
        {name: newName3, age: 25}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Mayur', age: 28},
        {name: event.target.value, age: 35},
        {name: 'Max', age: 22}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            changed={this.nameChangedHandler} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Mayu K', 'Maya K', 'Man K')}
            changed={this.nameChangedHandler} >My Hobbies: Reading</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
            changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Well this is working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler} >Toggle Persons</button>
        {persons}
      </div>      
    );
  
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));

  }
}

export default App;
