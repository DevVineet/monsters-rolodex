import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/seach-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField : ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(res=>this.setState({monsters:res}))
    .catch(err=>console.error(err))
  }

  handleChange(e) {
    console.log("134")
    // this.setState({searchField:e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          onChangeHandler={this.handleChange()} 
        />
        <CardList monsters={monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))}/>
      </div>
    );
  }
}

export default App;
