import './App.css';
import NavBar from './components/NavBar';
import Content from './components/Content';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CategorysContainer from './components/CategorysContainer';
import Cart from './components/Cart';
import { collection, getDocs } from 'firebase/firestore';
import { getData } from './firebase/index';
import { CartProvider } from './components/CartContext';
import Subirarchivos from './components/Subirarchivos';




function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <section>
            <NavBar />
            <Switch>
              <Route exact to path="/home" component={Content} />
              <Route exact to path="/" component={Content} />
              <Route path="/category/:id" component={ItemListContainer} />
              <Route path="/category" component={CategorysContainer} />
              <Route exact to path="/item-details/:idProduct" component={ItemDetailContainer} />
              <Route path="/cart" component={Cart} />
              <Route path="/update" component={Subirarchivos} />
            </Switch>
          </section>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
