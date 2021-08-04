import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer nombre="Tomas" apellido="Lanterna"/>
      <ItemCount stock="4" initial="2"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi Primer proyecto de react Tomas Lanterna
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

export default App;
