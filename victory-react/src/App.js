import React, { Component } from 'react';
import AnimalPie from './AnimalPie';
import EarningsChart from './EarningsChart';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <EarningsChart />
        <AnimalPie />
      </div>
    );
  }
}

export default App;
