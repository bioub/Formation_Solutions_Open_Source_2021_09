import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  }
  render() {
    const { count } = this.state;
    return (
      <button className="Counter" onClick={() => this.handleClick()}>
        {count}
      </button>
    );
  }
}

export default Counter;
