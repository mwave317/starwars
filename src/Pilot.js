import React, { Component } from 'react';

export default class Pilot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pilot_name: '',
    };
  };

  pilotstName(event) {
    // This changes the state to be something different than it was.

    this.setState({ pilot_name: event.target.value });
    console.log(event.target.value);
  };

  render() {
    return (

    <div>
      <section>
      <input type="text" placeholder="Enter a X-Wing pilot"
    onChange={(event) => this.pilotstName(event)}
    value={this.state.pilot_name} />
  </section>
      <h1>Which planet should we user for our new hidden base.</h1>
      <h2>{this.state.pilot_name}</h2>
      <h2> May the force be with you, always.</h2>
    </div>
);
  };
};
