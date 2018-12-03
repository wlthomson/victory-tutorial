import React, { Component } from 'react';
import { VictoryPie } from 'victory';

const data = [
  { x: 'Cats', y: 35 },
  { x: 'Dogs', y: 40 },
  { x: 'Birds', y: 55 }
];

class AnimalPie extends Component {
  render() {
    return <VictoryPie data={data} />;
  }
}

export default AnimalPie;
