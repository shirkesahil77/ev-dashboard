import React from 'react';
import evIcon from '../utils/assets/ev-vehicle.jpg';
import evlogo from '../utils/assets/ev-logo.png';

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white p-4 fixed w-full top-0 z-20 shadow-md flex justify-between items-center">
        
      <div  className="text-lg  flex  gap-2  font-semibold ml-10"><img src={evlogo}  className='w-15 h-10 object-contain bg-transparent aspect-auto'/> EV Vehicles</div>
      <div className="flex items-center space-x-4">
        {/* Search Input with Icon */}
        <div className="relative hidden md:block"> {/* Hidden on small screens */}
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring focus:ring-gray-600"
          />
          <i className="bi bi-search text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
        </div>

        <button className="text-white focus:outline-none">
          <i className="bi bi-bell-fill text-xl"></i>
        </button>

        <div className="flex items-center space-x-2">
          <span className="text-sm hidden sm:inline">Hello, User</span>
          <i className="bi bi-person-circle text-2xl"></i>
        </div>
        
        {/* Mobile Search Icon */}
        <div className="md:hidden">
          <button className="relative">
            <i className="bi bi-search text-xl"></i>
            {/* Add a tooltip or modal for the search functionality here if desired */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
