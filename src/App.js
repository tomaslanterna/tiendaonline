import './App.css';
import NavBar from './components/NavBar';
import Content from './components/Content';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrusel from './components/Carrusel';



function App() {
  return (
    <div className="App">
      <Router>
        <section>
          <NavBar />
          <Carrusel/>
          <Switch>
            <Route path="/Productos" component={Content} />
            <Route path="/itemDetails" component={ItemDetailContainer} />
            <Route path="/login" component={Login} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
