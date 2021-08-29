import './App.css';
import NavBar from './components/NavBar';
import Content from './components/Content';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CategorysContainer from './components/CategorysContainer';
import Cart from './components/Cart';




function App() {
  return (
    <div className="App">
      <Router>
        <section>
          <NavBar />
          <Switch>
          <Route exact to path="/home" component={Content}/>
            <Route exact to path="/" component={Content}/>
            <Route path="/category/:id" component={ItemListContainer} />
            <Route path="/category" component={CategorysContainer} />
            <Route exact to path="/item-details/:idCategory/:idProduct" component={ItemDetailContainer} />
            <Route path="/login" component={Login} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
