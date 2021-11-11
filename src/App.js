import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import FinalCart from './components/FinalCart/FinalCart';
import ErrorCard from './components/ErrorCard/ErrorCard';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Category from './components/Category/Category';
import CardWidget from './components/Navbar/CardWidget/CardWidget';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
           <Home />
        </Route>
        <Route exact path="/item/:itemId">
           <ItemDetailContainer />
        </Route>
        <Route exact path="/category/:categoryId">
            <Category />
        </Route>
        <Route exact path="/category">
            <Home />
        </Route>
        <Route exact path="/cart">
            <Cart />
        </Route>
        <Route exact path="/FinalCart">
            <FinalCart />
        </Route>
        <Route path="*">
            <ErrorCard />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;


