import logo from './components/grapple from srs1.png';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <p>Testing sum 12 + 5: {12 + 5}</p>
    <div className="App">
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Grapple Cookbook
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
