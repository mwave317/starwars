import React, { Component } from 'react';
export default class Planet extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Planets: [],
        pilot_name: '',
      };
  };

  componentDidMount() {
    fetch('http://swapi.co/api/planets')
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.setState({ Planets: response.results });
    });
    console.log('Helwoo');
  };

  render() {
    const planets = this.state.Planets.map(planet => {
      return (

      <div>
        
        <p>Name: {planet.name}</p>
        <p>Climate: {planet.climate}</p>
        <p>Diameter: {planet.diameter}</p>
        <p>Roatation Period: {planet.rotation_period}</p>
        <p>Orbiatal Period: {planet.orbital_period}</p>
        <p>Population: {planet.population}</p>
        <p>Terrain: {planet.terrain}</p>
      </div>
);},
);
    return (
  <div>
  {planets}

</div>
);
  }

};
