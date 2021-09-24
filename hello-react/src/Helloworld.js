import { Component } from 'react';

class Helloworld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Romain'
    };
  }
  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }
  render() {
    const { name } = this.state;
    return (
      <div className="Helloworld">
        <div>
          Prénom : <input value={name} onChange={this.handleChange} />
        </div>
        <p>Hello {name}!</p>
      </div>
    );
  }
}

export default Helloworld;
