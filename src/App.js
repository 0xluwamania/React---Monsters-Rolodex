/* eslint-disable no-useless-constructor */
import { Component } from 'react';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: {lastName: "Odedina", firstName: "Ade"},
      country: "Nigeria"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello, My name is {this.state.name.firstName} {this.state.name.lastName}  and I am from {this.state.country}.
          </p>
         <button onClick={()=> {
          this.setState({name: {lastName: "Adewunmi", firstName: "Joshua"}})
         }}>
         Change name
         </button>
        </header>
      </div>
    );
  }
 
}

export default App;
