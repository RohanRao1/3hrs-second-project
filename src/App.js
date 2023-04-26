import './App.css';
import React, {useState} from 'react';
import Header from './components/layout/Header';
import ProductForm from './components/product/ProductForm';
import AvailableProducts from './components/product/AvailableProducts';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return <CartProvider>
    {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
    <Header onShowCart={showCarthandler} />
    <ProductForm />
    <AvailableProducts />
  </CartProvider>
}

export default App;
