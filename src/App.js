import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search/search.component'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ cards: users }))
  }

  render() {
    const { cards, searchField } = this.state;
    const filteredCards = cards.filter(card =>
      card.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox placeholder='Search' handleChange={e =>
          this.setState({ searchField: e.target.value })} />
        <CardList cards={filteredCards} />
      </div>
    );
  }
}

export default App;
