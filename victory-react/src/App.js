import React, { Component } from 'react';
import { VictoryBar, VictoryChart } from 'victory';
import './App.css';

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

class App extends Component {
  render() {
    return (
      <VictoryChart>
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    );
  }
}

export default App;
