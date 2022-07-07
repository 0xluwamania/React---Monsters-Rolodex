/* eslint-disable no-useless-constructor */
import { Component } from 'react';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [{
        name: "Amaechi",
        id: "hgjud"
      },
      {
        name: "Moses",
        id: "potiy"
      },
      {
        name: "Ikenna",
        id: "swwgf"
      },
      {
        name: "Node",
        id: "sgefegf"
      }
    ]
    
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster)=> {
          return <div key={monster.id}>
          <h1>{monster.name}</h1>
          </div>
        })}
      </div>
    );
  }
 
}

export default App;
