import React from 'react'

const Exercise2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      {/* ====== Responsive Layout Examples ====== */}
      <div className="p-4">
        <h1 className="text-base md:text-lg lg:text-2xl">Responsive Text Size</h1>

        <div className="p-4 lg:p-8 bg-blue-500 text-white mt-4">Responsive Padding</div>

        <div className="block lg:flex gap-4 mt-4">
          <div className="bg-green-500 p-4 text-white">Item 1</div>
          <div className="bg-green-500 p-4 text-white">Item 2</div>
        </div>
      </div>

      {/* ====== Responsive Grid ====== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-blue-500 p-8 text-white">
            {i + 1}
          </div>
        ))}
      </div>

      {/* ====== Visibility Examples ====== */}
      <div className="p-4">
        <div className="hidden lg:block bg-blue-500 p-4 text-white mb-4">
          Only visible on large screens
        </div>

        <div className="block lg:hidden bg-green-500 p-4 text-white mb-4">
          Only visible on mobile
        </div>

        <div className="bg-red-500 p-4 text-white">
          <span className="block sm:hidden">📱 Mobile View</span>
          <span className="hidden sm:block md:hidden">📱 Tablet View</span>
          <span className="hidden md:block">💻 Desktop View</span>
        </div>
      </div>

      {/* ====== Navigation Bar ====== */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                N
              </div>
              <span className="text-xl font-bold text-gray-800">NaijaStore</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
                Products
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
                Contact
              </a>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700">
                Login
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 text-2xl font-bold"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Products</a>
                <a href="#" className="text-gray-700 hover:text-green-600 font-medium">About</a>
                <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 text-left">
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Exercise2
