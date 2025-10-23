import { useState } from 'react'
import './ShoppingCart.css'

function App() {
  const [count, setCount] = useState(0)
    function increment() {
      setCount(count + 1); // Update state
    }

    function decrement() {
      setCount(count - 1); // Update state
    }

    function reset() {
    setCount(0);
    // reset(0);
   }

   function total() {
    setCount*price
   }

    return (
      <div className="count">
        <h3>Shopping Cart</h3>
        <p>Jollof Rice - ₦1,500 * {count} = {total} </p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Remove</button>
        
        <p>Plantain - ₦2,000 * {count} = {total} </p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Remove</button>
        
        <p>Fruit Juice - ₦3,500 * {count} = {total} </p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Remove</button>
      </div>
    );
}

export default App
