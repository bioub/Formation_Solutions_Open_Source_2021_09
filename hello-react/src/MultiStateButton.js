import { Component } from 'react';

class MultiStateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button className="MultiStateButton">AFFICHER_L_ELEMENT_ACTIF</button>
    );
  }
}

export default MultiStateButton;
