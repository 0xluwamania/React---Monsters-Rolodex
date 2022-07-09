/* eslint-disable no-useless-constructor */
import {useState, useEffect} from "react"
import CardList from "./components/card-list/card-list.component"
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = ()=>{
  let i = 1
  console.log(++i)
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {setMonsters(data)}
  )
  }, [])
  
  useEffect (()=>{
    const newFilteredMonsters = monsters.filter((monster)=>monster.name.toLocaleLowerCase().includes(searchField));
    setFilterMonsters(newFilteredMonsters)
  }, [monsters, searchField])
  const onSearchChange = (event)=>{
      const searchFieldString = event.target.value.toLocaleLowerCase()
      setSearchField(searchFieldString)
      console.log(searchFieldString)
    }
     
  return (
    <div className="App">
      <h1 className="app-title">Monsters Project</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className="monsters search-box"/>
      <CardList monsters={filteredMonsters}/>
      </div>
  )
}
// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
   
//   }
// componentDidMount(){
  
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(data => this.setState(()=> {
//     return {monsters: data}
//   }))
// }

// onSearchChange = (event)=>{
//   const searchField = event.target.value.toLowerCase()
//   this.setState(()=> {return { searchField}})
// }

//   render() {
    
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
//     const filteredMonsters = monsters.filter((monster)=>monster.name.toLowerCase().includes(searchField)); 
//     return (
//       <div className="App">
//       <h1 className="app-title">Monsters Project</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className="monsters search-box"/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
 
// }

export default App;
