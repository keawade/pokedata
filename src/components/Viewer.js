import React, { Component } from 'react';
import { calculateStrengths } from '../helpers/helpers'

class Viewer extends Component {
  render() {
    return (
      <div className="App-viewer">
        current: {this.props.current ? this.props.current.name : null}
      </div>
    );
  }
}

export default Viewer;
