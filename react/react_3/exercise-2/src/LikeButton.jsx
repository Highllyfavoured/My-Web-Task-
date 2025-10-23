import { use, useState } from 'react'
import './LikeButton.css'

function App() {
  const [isLike, setIsLike] = useState(true);

  
  return (
    <div className={`like ${isLike === "Yes❤️" ? 'yes' : isLike === "No🤍" ? 'no' : ''}`}>
      <p>Do you like me?: {isLike ? 'Yes❤️' : 'No🤍'}</p>
      <button onClick={() => setIsLike(!isLike)}>
        {isLike ? '❤️ liked (1 like)' : '🤍 like (0 like)'}
        </button> 
        </div>
  );
}

export default App
