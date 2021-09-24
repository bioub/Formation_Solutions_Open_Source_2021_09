import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Todos from './Todos';
import {BrowserRouter, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          MyApp
          <Link to="/">Home</Link>
          <Link to="/todos">Todos</Link>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/todos" component={Todos} />
      </BrowserRouter>
    </div>
  );
}

export default App;
