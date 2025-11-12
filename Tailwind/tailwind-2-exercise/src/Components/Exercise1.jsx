import React from 'react';
import { Link } from 'react-router-dom'; // ✅ You forgot to import Link

const Exercise1 = () => {
  const products = [
    {
      id: 1,
      name: 'Jollof Rice',
      price: '1,500',
      image: (
        <img
          src="/download.jpeg"
          alt="Jollof Rice"
          className="w-100 h-50 border-4 border-white shadow-md object-cover"
        />
      ),
      category: 'Food',
    },
    { id: 2, name: 'Ankara Fabric', price: '5,000', image: '👗', category: 'Fashion' },
    { id: 3, name: 'Suya Spice', price: '800', image: '🌶️', category: 'Food' },
    { id: 4, name: 'Aso-Ebi', price: '15,000', image: '🥻', category: 'Fashion' },
    { id: 5, name: 'Palm Wine', price: '1,200', image: '🍶', category: 'Drinks' },
    { id: 6, name: 'Agbada', price: '25,000', image: '🎩', category: 'Fashion' },
    { id: 7, name: 'Chin Chin', price: '500', image: '🍪', category: 'Food' },
    { id: 8, name: 'Puff Puff', price: '300', image: '🍩', category: 'Food' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Products Grid</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-6xl">
                {product.image}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>

                <p className="text-2xl font-bold text-green-600 mb-4">₦{product.price}</p>

                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
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
    </div>
  );
};

export default Exercise1;
