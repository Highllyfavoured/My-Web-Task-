import React from 'react'
import { Link } from 'react-router-dom'; 


const Exercise4 = () => {
  return (
    <div>
       {/* Navigation Links */}
        <p className="mt-8 font-bold text-lg text-gray-800">
          Click Here to Navigate to Other Exercises:
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link
            to="/"
            className="bg-[#333] hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded"
          >
            Home
          </Link>
          <Link
            to="/exercise2"
            className="bg-[#333] hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded"
          >
            Exercise 2
          </Link>
          <Link
            to="/exercise3"
            className="bg-[#333] hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded"
          >
            Exercise 3
          </Link>
          <Link
            to="/exercise4"
            className="bg-[#333] hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded"
          >
            Exercise 4
          </Link>
        </div>
    </div>
  )
}

export default Exercise4
