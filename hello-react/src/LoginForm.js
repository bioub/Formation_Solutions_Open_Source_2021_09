import { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'romain',
      password: '123456',
      rememberMe: true,
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    const { username, password, rememberMe } = this.state;
    return (
      <form className="LoginForm" onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          Username :{' '}
          <input
            name="username"
            type="text"
            value={username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
        </div>
        <div>
          Password :{' '}
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        <div>
          <label>
            Remember me{' '}
            <input
              name="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => this.setState({ rememberMe: e.target.checked })}
            />
          </label>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
