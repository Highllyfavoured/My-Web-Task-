import React from 'react'
import { Link } from 'react-router-dom'

const Exercise2 = () => {
  return (
    <div>
      <div className='max-w-sm mx-auto bg-white rounded-lg shadow-lg m-16 flex flex-col'> 
      <h1 className='text-bold font-bold text-lg'>Exercise Two</h1>
      <button className='bg-green-500 px-4 py-2 hover:bg-green-700 active:bg-green-800 text-white py-2 px-4 rounded m-4 active:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg'>Primary</button>

      <button className='bg-white px-4 py-2 hover:bg-green-700 active:bg-green-800 text-black border-green-500 py-2 px-4 rounded m-4 shadow-lg active:bg-green-800 focus:outline-none fosscus:ring-4 focus:ring-green-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'>Secondary</button>

      <button className='px-4 py-2 rounded-lg text-white bg-red-600 hover:bg-red-700 active:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors m-4 shadow-lg'>Danger</button>

      <button className='px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 active:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors m-4 shadow-lg'>Success</button>
      
      <button className='text-lg bg-stone-500 px-4 py-2 hover:bg-stone-700 active:bg-stone-800 text-white py-2 px-4 rounded m-4 font-bold active:bg-stone-800 focus:outline-none focus:ring-4 focus:ring-stone-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg'>Large Size</button>

      <button className='text-sm bg-zinc-500 px-4 py-2 hover:bg-zinc-700 active:bg-zinc-800 text-white py-2 px-4 rounded m-4 active:bg-zinc-800 focus:outline-none focus:ring-4 focus:ring-zinc-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg'>Small Size</button>
     </div>
      <p className='text-bold shadow-lg font-bold'>Click Here to Navigate to Other Exercises</p>
      <div className='flex flex-row gap-2'>
        <button className='bg-purple-500 p-1 hover:bg-purple-700 active:bg-purple-800 text-white font-bold py-2 px-4 rounded'><Link to="/">Exercise 1</Link></button>
        <button className='bg-purple-500 p-1 hover:bg-purple-700 active:bg-purple-800 text-white font-bold py-2 px-4 rounded'><Link to="/exercise3">Exercise 3</Link></button>
        <button className='bg-purple-500 p-1 hover:bg-purple-700 active:bg-purple-800 text-white font-bold py-2 px-4 rounded'><Link to="/exercise4">Exercise 4</Link></button>
      </div>
    </div>
  )
}

export default Exercise2
