import { useState } from 'react'
import './Counter.css'

function App() {
  const [count, setCount] = useState(0)
    function increment() {
      setCount(count + 1); // Update state
    }

    function decrement() {

      setCount(count <= 0 ? 0 : count - 1); // Update state
    }

    function reset() {
    setCount(0);
    // reset(0);
   }

    return (
      <div className="count">
        <p>Current Count: {count}</p>
        <div className='button'> 
          <button onClick={increment}>[+]</button>
          <button onClick={decrement}>[-]</button>
          <button onClick={reset}>[Reset]</button>
        </div>
      </div>
    );
}

export default App
