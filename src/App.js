import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import VehicleLocations from "./pages/VehicleLocations";

function App() {
  return (
    <>
      {/* <Layout /> */}
      <div className="flex-grow">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/dashboard" element={<Layout />} />
            {/* <Route path="/bookmarks" element={<Dashboard />} />
            <Route path="/map" element={<VehicleLocations />} />
            <Route path="/logout" element={<Dashboard />} /> */}
            {/* Change as needed */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
