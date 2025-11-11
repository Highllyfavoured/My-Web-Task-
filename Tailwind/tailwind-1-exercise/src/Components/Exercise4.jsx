import React from 'react'
import { Link } from 'react-router-dom'

const Exercise4 = () => {
  return (
    <div>
      <p className='text-bold shadow-lg font-bold'>Click Here to Navigate to Other Exercises</p>
      <div className='flex flex-row gap-2'>
        <button className='bg-purple-500 p-1 hover:bg-purple-700 active:bg-purple-800 text-white font-bold py-2 px-4 rounded'><Link to="/">Home</Link></button>
        <button className='bg-purple-500 p-1 hover:bg-purple-700 active:bg-purple-800 text-white font-bold py-2 px-4 rounded'><Link to="/exercise3">Exercise 3</Link></button>
        <button className='bg-purple-500 p-1 hover:bg-purple-700 active:bg-purple-800 text-white font-bold py-2 px-4 rounded'><Link to="/exercise4">Exercise 4</Link></button>
      </div>
    </div>
  )
}

export default Exercise4
