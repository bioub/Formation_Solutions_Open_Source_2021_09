import { Component } from 'react';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Beurre',
      todos: [
        { id: Math.random(), title: 'Pain', completed: true },
        { id: Math.random(), title: 'Lait', completed: false },
      ],
    };
  }
  render() {
    return (
      <div className="Todos">
        <form class="todos-form">
          <input class="todos-input" />
          <button>+</button>
        </form>
        <div class="todos-list">
          {/* <div>
            <span>Pain</span>
          </div>
          <div>
            <span>Lait</span>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Todos;
