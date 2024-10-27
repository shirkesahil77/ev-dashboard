import React, { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div>
      {/* Sidebar Toggle Button */}
      <span
        className="fixed text-white bg-gray-900 text-4xl top-4 left-1 z-50 cursor-pointer"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <IoMdClose /> : <IoMdMenu />}
      </span>

      {/* Sidebar */}
      <div
        className={`fixed top-12 left-0 bottom-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Items */}
        <NavLink to="/" className="p-2.5 mt-3 flex items-center rounded-md px-4 hover:bg-gray-600 text-white cursor-pointer">
          <i className="bi bi-house-door-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
        </NavLink>

        <NavLink to="/dashboard" className="p-2.5 mt-3 flex items-center rounded-md px-4 hover:bg-gray-600 text-white cursor-pointer">
          <i className="bi bi-bookmark-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Dashboard</span>
        </NavLink>

        <NavLink to="/map" className="p-2.5 mt-3 flex items-center rounded-md px-4 hover:bg-gray-600 text-white cursor-pointer">
          <i className="bi bi-map-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Map</span>
        </NavLink>

        <div className="my-4 bg-gray-600 h-[1px]"></div>

        {/* Dropdown Menu for Chatbox */}
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 hover:bg-gray-600 text-white cursor-pointer"
          onClick={toggleDropdown}
        >
          <i className="bi bi-chat-left-text-fill"></i>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
            <span className={`text-sm transition-transform ${isDropdownOpen ? 'rotate-0' : 'rotate-180'}`}>
              <i className="bi bi-chevron-down"></i>
            </span>
          </div>
        </div>

        {/* Dropdown Items */}
        {isDropdownOpen && (
          <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
            <h1 className="cursor-pointer p-2 hover:bg-gray-600 rounded-md mt-1">Social</h1>
            <h1 className="cursor-pointer p-2 hover:bg-gray-600 rounded-md mt-1">Personal</h1>
            <h1 className="cursor-pointer p-2 hover:bg-gray-600 rounded-md mt-1">Friends</h1>
          </div>
        )}

        <NavLink to="/logout" className="p-2.5 mt-3 flex items-cente bottom-0 rounded-md px-4 hover:bg-gray-600 text-white cursor-pointer">
          <i className="bi bi-box-arrow-in-right"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
