import './App.css';
import Hero from './Hero';
import Menu from './Menu';
import Nav from './Nav';
import Cart from './Cart';
import { CartContext } from './cartContext';
import Order from './Order';

function App() {

  return (
    <>
    <Nav />
    <Hero />
    <Menu />
    <Cart />
    <Order />
    </>
  );
}

export default App;
