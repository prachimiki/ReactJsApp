import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import person from './Person/Person';


class App extends Component {
  state={
    persons:[
      {name:'Mike', age:28},
      {name:'Manu', age:38},
      {name:'Steph', age:24}
    ]
  }

  switchNameHandler=()=>{
   // console.log('was clicked')
   this.setState({
     persons: [
      {name:'Prachi', age:28},
      {name:'Manu', age:38},
      {name:'Steph', age:44}
     ]
   })
  }

  render(){
  return (
    <div className="App">
     <h1>hi I am react app</h1>
     <button onClick={this.switchNameHandler}>Switch name</button>
     <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
     <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>my hobbies are:reading</Person>
     <Person name ={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
    </div>
  );
  }
  //return React.createElement('div',{className:'App'}, React.createElement('h1', null, 'does this work now'))
}

export default App;
