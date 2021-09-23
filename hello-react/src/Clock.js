import { Component, useEffect, useState } from 'react';

class Clock extends Component {
  constructor(props) {
    super();
    this.state = {
      now: new Date(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }
  render() {
    // pour les props : this.props
    const { now } = this.state;
    return <div className="Clock">{now.toLocaleTimeString()}</div>;
  }
}

// this.state = {
//   now: new Date(),
//   format: 'HH:mm:ss',
//   delay: 1000,
// }

// state = [new Date()];

// function Clock() {
//   const [now, setNow] = useState(new Date());
//   useEffect(() => {
//     setInterval(() => {
//       setNow(new Date());
//     }, 1000);
//   }, []);
//   return <div className="Clock">{now.toLocaleTimeString()}</div>;
// }

export default Clock;
