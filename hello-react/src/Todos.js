import { Component } from 'react';
import { fetchTodos } from './api';

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
  componentDidMount() {
    const { todos } = this.state;
    fetchTodos().then((newTodos) => {
      this.setState({
        todos: [
          ...todos,
          ...newTodos
        ],
      });
    })
  }
  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  }
  handleSubmit = (event) => {
    const { inputValue, todos } = this.state;
    event.preventDefault();
    this.setState({
      inputValue: '',
      todos: [
        ...todos,
        { id: Math.random(), title: inputValue, completed: false },
      ],
    });
  }
  handleDelete = (item) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((t) => t.id !== item.id),
    });
  }
  render() {
    const { inputValue, todos } = this.state;
    return (
      <div className="Todos" onSubmit={this.handleSubmit}>
        <form className="todos-form">
          <input className="todos-input" value={inputValue} onChange={this.handleChange} />
          <button>+</button>
        </form>
        <div className="todos-list">
          {todos.map((t, i) => (
            <div key={t.id}>
              <span>{t.title}</span>
              <button onClick={() => this.handleDelete(t)}>-</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Todos;
