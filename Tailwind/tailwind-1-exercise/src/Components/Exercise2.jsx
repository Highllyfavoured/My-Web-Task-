import React from 'react'
import { Link } from 'react-router-dom'

const Exercise2 = () => {
  return (
      <div className='max-w-lg mx-auto bg-white rounded-lg shadow-lg m-16 flex flex-col'> 
        <h1 className='text-bold font-bold text-lg'>Exercise Two</h1>
        <div className='flex flex-col'>
        <button className='bg-green-500 px-4 py-2 hover:bg-green-700 active:bg-green-800 text-whiterounded m-4 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg rounded-sm'>Primary</button>

        <button className='bg-white px-4 py-2 hover:bg-green-700 active:bg-green-800 text-black border-green-500 rounded m-4 shadow-lg focus:outline-none fosscus:ring-4 focus:ring-green-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors '>Secondary</button>

        <button className='px-4 py-2 rounded-lg text-white bg-red-600 hover:bg-red-700 active:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors m-4 shadow-lg'>Danger</button>

        <button className='px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 active:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors m-4 shadow-lg'>Success</button>
        
        <button className='text-lg bg-stone-500 px-4 py-2 hover:bg-stone-700 text-white rounded m-4 font-bold active:bg-stone-800 focus:outline-none focus:ring-4 focus:ring-stone-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg'>Large Size</button>

        <button className='text-sm bg-zinc-500 px-4 py-2 hover:bg-zinc-700 active:bg-zinc-800 text-white rounded m-4 focus:outline-none focus:ring-4 focus:ring-zinc-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg'>Small Size</button>
      </div>
        <p className='text-bold shadow-lg font-bold'>Click Here to Navigate to Other Exercises</p>
        <div className='flex gap-2 justify-around'> 
          <Link to="/" className='bg-[#333] p-1 hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded'>Home</Link>
          <Link to="/exercise1" className='bg-[#333] p-1 hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded'>Exercise 1</Link>
          <Link to="/exercise3" className='bg-[#333] p-1 hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded'>Exercise 3</Link>
          <Link to="/exercise4" className='bg-[#333] p-1 hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded'>Exercise 4</Link>
          </div>
    </div>
  )
}

export default Exercise2
