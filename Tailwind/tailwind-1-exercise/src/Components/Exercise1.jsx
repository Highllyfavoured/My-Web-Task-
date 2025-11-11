import React from 'react'
import { Link } from 'react-router-dom'

const Exercise1 = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
    {/* Header with Nigerian colors */}
    <div className="h-32 bg-gradient-to-r from-green-600 via-white to-green-600"></div>
    {/* Avatar */}
    <div className="relative px-6 -mt-16">
      <div className="w-32 h-32 bg-gray-300 rounded-full border-4 border-white mx-auto"></div>
    </div>
    {/* Content */}
    <div className="text-center px-6 py-4">
      <h2 className="text-2xl font-bold text-gray-800">Olaosebikan Favour</h2>
      <p className="text-gray-600 mt-1">Generative AI Developer</p>
      <p className="text-sm text-gray-500 mt-2">Abeokuata, Nigeria 🇳🇬</p>

      {/* Stats */}
        <div className="flex justify-around mt-6 pt-6 border-t border-gray-200">
          <div>
            <p className="text-2xl font-bold text-naija-green">1.2k</p>
            <p className="text-xs text-gray-600 uppercase">Followers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-naija-green">48</p>
            <p className="text-xs text-gray-600 uppercase">Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-naija-green">520</p>
            <p className="text-xs text-gray-600 uppercase">Following</p>
          </div>
        </div>
        {/* Bio */}
      <p className="text-gray-700 mt-4 text-sm leading-relaxed">
        Veterinarian | AI_Developer | AMR Steward | Animal Research student (TETFund Grant) | Passionate about Sustainable Animal Health | One Health Advocate | Event Decorator 
      </p>
      {/* Button */}
        <button className="mt-6 w-full bg-naija-green text-white font-semibold py-3 rounded-lg">
          Follow
        </button>

        <p>Click Here to Navigate to Exercise Two</p>
        <button className='bg-green-500 p-1 hover:bg-green-700 active:bg-green-800 text-white
font-bold py-2 px-4 rounded'><Link to="/exercise2">Exercise 2</Link></button>
      </div>
    </div>
    
  )
}

export default Exercise1
