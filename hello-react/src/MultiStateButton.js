import { Component } from 'react';

class MultiStateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  handleClick = () => {
    const { items } = this.props;
    const { index } = this.state;
    this.setState({
      index: (index + 1) % items.length,
    });
  };
  render() {
    const { items } = this.props;
    const { index } = this.state;
    return (
      <button className="MultiStateButton" onClick={this.handleClick}>
        {items[index]}
      </button>
    );
  }
}

export default MultiStateButton;
