// src/components/Layout.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar"; // Sidebar component
import Navbar from "./components/Navbar"; // Navbar component
import Dashboard from "./pages/Dashboard"; // Main content

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Set to true for default sidebar visibility

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="top-12 mt-12">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main content */}
      <div
        className={`flex-1 transition-all duration-300 `}
      >
        <Navbar toggleSidebar={toggleSidebar} />

        <div className={`p-8 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}>
          <h1 className="text-center text-xl py-9">
            <Dashboard />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Layout;
