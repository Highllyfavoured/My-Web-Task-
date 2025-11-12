import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='max-w-lg mx-auto bg-white rounded-lg shadow-lg m-16'>
      <h1 className='text-bold shadow-lg font-bold'>Click Here to Navigate to Tailwind Task One, Exercises</h1>
            <div className='flex flex-col gap-6'>
              <Link to="/" className='bg-[#333] p-1 hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded text-center'>Home</Link>
              <Link to="/exercise1" className='bg-[#333] p-1 hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded text-center'>Exercise 1</Link>
              <Link to="/exercise2" className='bg-[#333] p-1 hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded text-center'>Exercise 2</Link>
              <Link to="/exercise3" className='bg-[#333] p-1 hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded text-center'>Exercise 3</Link>
              <Link to="/exercise4" className='bg-[#333] p-1 hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded text-center'>Exercise 4</Link>
            </div>
    </div>
  )
}

export default Home;

