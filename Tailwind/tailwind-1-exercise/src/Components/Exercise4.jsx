import React from 'react'
import { Link } from 'react-router-dom'

const Exercise4 = () => {
const colors = [
  // Nigerian Flag Colors
  { name: "Naija Green", hex: "#008751" },
  { name: "White", hex: "#FFFFFF" },

  // Naija Green Shades
  { name: "Naija Green 50", hex: "#E6F4EE" },
  { name: "Naija Green 100", hex: "#C3E7D6" },
  { name: "Naija Green 200", hex: "#9DD8BD" },
  { name: "Naija Green 300", hex: "#77C9A3" },
  { name: "Naija Green 400", hex: "#52BA8A" },
  { name: "Naija Green 500", hex: "#2DAC71" },
  { name: "Naija Green 600", hex: "#248A5B" },
  { name: "Naija Green 700", hex: "#1B6845" },
  { name: "Naija Green 800", hex: "#12462E" },
  { name: "Naija Green 900", hex: "#092317" },
  { name: "Naija Green 950", hex: "#04110B" },
];
  return (
    <div className="max-w-6xl mx-auto mt-12 p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        🇳🇬 Nigerian Color Palette Showcase
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {colors.map((color) => (
          <div
            key={color.name}
            className="flex flex-col items-center text-center"
          >
            <div
              className="w-20 h-20 rounded-xl shadow-md border border-gray-200"
              style={{ backgroundColor: color.hex }}
            ></div>
            <p
              className={`mt-2 text-sm font-medium ${
                color.hex === "#FFFFFF" ? "text-gray-800" : "text-gray-100"
              }`}
              style={{
                color:
                  color.hex === "#FFFFFF" ? "#333" : "#111",
              }}
            >
              {color.name}
            </p>
            <p className="text-xs text-gray-500">{color.hex}</p>
          </div>
        ))}
      </div>

      <p className='text-bold font-bold'>Click Here to Navigate to Other Exercises</p>
        <div className='flex flex-row gap-2'>
          <Link to="/" className='bg-[#333] p-1 hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded'>Home</Link>
          <Link to="/exercise2" className='bg-[#333] p-1 hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded'>Exercise 2</Link>
          <Link to="/exercise3" className='bg-[#333] p-1 hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded'>Exercise 3</Link>
          <Link to="/exercise4" className='bg-[#333] p-1 hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded'>Exercise 4</Link>
        </div>
    </div>
  )
}

export default Exercise4;
