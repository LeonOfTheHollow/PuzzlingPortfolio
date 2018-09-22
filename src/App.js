import React, { Component } from 'react';
import TreasureChest from './components/TreasureChest';
import Header from './components/Header';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TreasureChest />
      </div>
    );
  }
}

export default App;
