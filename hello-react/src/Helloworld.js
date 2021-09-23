import { Component } from 'react';

class Helloworld extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Helloworld">
        <div>
          Prénom : <input />
        </div>
        <p>Hello AFFICHER_LE_NOM_ICI!</p>
      </div>
    );
  }
}

export default Helloworld;
