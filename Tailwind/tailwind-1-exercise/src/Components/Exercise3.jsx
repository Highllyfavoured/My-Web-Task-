import React from 'react'
import { Link } from 'react-router-dom';

const Exercise3 = () => {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mt-10 border border-gray-200">
      {/* Header with Nigerian flag gradient */}
      <div className="bg-linear-to-r from-green-600 via-white to-green-600 h-24 relative">
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <img
            src="/1760889269560.jpeg"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <div className="pt-14 pb-6 px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Dr. Favour Olaosebikan
        </h2>
        <p className="text-sm text-gray-500">
          Veterinary Surgeon & Researcher
        </p>
        <p className="text-xs text-gray-400 mt-1">Abeokuta, Nigeria 🇳🇬</p>

        {/* Stats */}
        <div className="flex justify-around mt-5">
          <div>
            <p className="text-lg font-bold text-gray-800">1.2k</p>
            <p className="text-xs text-gray-500">Followers</p>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-800">48</p>
            <p className="text-xs text-gray-500">Posts</p>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-800">3.4k</p>
            <p className="text-xs text-gray-500">Likes</p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-6 text-left bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-2 text-center">
            ✨ From Fear to Fulfilment: My Journey with African Giant Rats 🐀 ✨
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            I just wrapped up my DVM research project on:
            <span className="font-medium">
              {" "}
              “Olfactory EEG Signaling in African Giant Rats after Exposure to
              Cinnamon and Vanilla Odorants.”
            </span>
            <br />
            <br />
            One of the most intense parts? I performed stereotaxic surgery on
            all my rats and they all survived. 😌
            <br />
            <br />
            My hands trembled, but I pressed through with faith, precision, and
            care — handling everything from soldering electrodes, surgery, EEG
            signal collection, to MATLAB-based analysis. 🥹
            <br />
            <br />
            The post-data moments brought me to tears — not just because the
            signals came out clean, but because I did it. I stayed the course. I
            didn’t quit.
            <br />
            <br />
            This project didn’t just grow my skills — it grew me. 😊
            <br />
            <br />
            <span className="italic text-gray-700">
              To anyone walking through fire right now: You’re becoming. Keep
              going. 🔥
            </span>
          </p>
        </div>

        {/* Follow Button */}
        <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition-all duration-200">
          Follow
        </button>
      </div>
      <div>
      <p className='text-bold shadow-lg font-bold'>Click Here to Navigate to Other Exercises</p>
      <div className='flex flex-row gap-2'>
        <Link to="/" className='bg-[#333] p-1 hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded'>Home</Link>
        <Link to="/exercise1" className='bg-[#333] p-1 hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded'>Exercise 1</Link>
        <Link to="/exercise3" className='bg-[#333] p-1 hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded'>Exercise 3</Link>
        <Link to="/exercise4" className='bg-[#333] p-1 hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded'>Exercise 4</Link>
      </div>
    </div>
    </div>
  );
};

export default Exercise3;

  
