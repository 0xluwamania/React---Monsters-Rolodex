/* eslint-disable no-useless-constructor */
import { Component } from 'react';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log('contructor')
  }
componentDidMount(){
  console.log('lifecycle')
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => this.setState(()=> {
    return {monsters: data}
  },()=> console.log(this.state) ))
}

  render() {
    console.log('render')
    const filteredMonsters = this.state.monsters.filter((monster)=>monster.name.toLocaleLowerCase().includes(this.state.searchField)); 
    return (
      <div className="App">
      <input className='search-box' type='search' placeholder='search monsters' onChange={(event)=>{
        const searchField = event.target.value.toLocaleLowerCase()
        
        // eslint-disable-next-line no-labels
        this.setState(()=> {return { searchField}})
      }} />
        {filteredMonsters.map((monster)=> {
          return <div key={monster.id}>
          <h1>{monster.name}</h1>
          </div>
        })}
      </div>
    );
  }
 
}

export default App;
