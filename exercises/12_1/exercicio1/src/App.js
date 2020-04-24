import React from 'react';
// import logo from './logo.svg';
import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to teste reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

/* function App() {
  return (task('teste da lista'));
} */

const App = () => task('teste do primeiro app React feito na aula');



export default App;
