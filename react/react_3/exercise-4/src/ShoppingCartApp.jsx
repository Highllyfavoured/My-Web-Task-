import { useState } from 'react';
import './ShoppingCart.css';
import Menu from './Menu';
import Cart from './Cart.jsx';

// Parent Component
function App() {
  const [cartItems, setCartItems] = useState([])

  const menuItems = [ 
    {id: 1, name: "Palm Oil", price: 20000, quantity: 5},
    {id: 2, name: "Garri", price: 3000, quantity: 3},
    {id: 3, name: "Onions", price: 1800, quantity: 6},
  ];


  function addToCart(item) {
  const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      // Increase quantity if item already in cart
      setCartItems(cartItems.map(cartItem => cartItem.id === item.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
      ));
    } else {
      //  Add new item to cart
      setCartItems([...cartItems, { ...item, quantity: 1}]);
    }
  }

  function removeFromCart(itemId) {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  }

  function updateQuantity(itemId, newQuantity) {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === itemId ? {...item, quantity: newQuantity } : item
      ));
    }
  }

    return (
    <div className='app'>
      <div className='text'> 
      <h1>🛒 Shopping Cart</h1>
      <p>Manage your Nigeria Food Items</p>
      </div>
      <Menu
      items={menuItems}
      addToCart={addToCart}
      />

      <Cart 
        items ={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        />       
    </div>
  );
  }


export default App;
