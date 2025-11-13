import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Exercise3 = () => {
  return (
    <div className='p-8'>
      <div className='flex flex-wrap gap-2 w-full max-w-200 mx-auto px-4 bg-amber-50 rounded-2xl'>
        <img
          src="/still-life-books-versus-technology.jpg"
          alt='laptop'
          className='w-full h-70 object-cover'
        />
        <div className='flex flex-row max-sm:flex-wrap gap-2 w-full items-center'> 
        <div className=''>
          <h1>The Future of Web Development: Building Scalable Applications</h1>
          <p>The landscape of web development is evolving rapidly. Modern applications demand scalability, performance, and maintainability—three pillars that challenge developers to think beyond traditional approaches.</p>
          <h1>Understanding Modern Architecture</h1>
          <p>Server-side rendering, static generation, and incremental static regeneration have transformed how we build web applications. These techniques allow us to deliver performant experiences while maintaining developer experience and flexibility.</p>
        </div>
        <div className=''>
          <h3 className='text-center font-bold'>Related Post</h3>
          <div className='bg-white border-2 border-[grey] max-sm:max-w-64 mx-auto rounded-2xl p-3'>
            <img
          src="/ai-nuclear-energy-background-future-innovation-disruptive-technology.jpg"
          alt='laptop'
          className='w-80 h-30 object-cover'
        />
        <h2 className='text-[grey]'>AI</h2>
        <h5>NUCLEAR ENERGY BACKGROUND: Deep dive</h5>
        <p className='text-[grey]'>7 min read</p>
        </div>
        <h2 className='mx-auto'>The Role of Edge Computing</h2>
<p>Edge computing brings computation closer to users, reducing latency and improving response times.</p>
        </div>
        </div>
      </div> 

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
  );
};

export default Exercise3;
