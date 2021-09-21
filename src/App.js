import './App.css';
import NavBar from './components/NavBar';
import Content from './components/Content';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CategorysContainer from './components/CategorysContainer';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext';
import Subirarchivos from './components/Subirarchivos';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { UserProvider } from './contexts/UserContext';




function App() {
  return (
    <div className="App">
      <UserProvider>
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
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
              </Switch>
            </section>
          </Router>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
