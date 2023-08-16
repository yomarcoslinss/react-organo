import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner'

function App() {
  return (
    <div className="App">
      <Banner />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem vindo ao React xD
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React eh vida!
        </a>
      </header>
    </div>
  );
}

export default App;
