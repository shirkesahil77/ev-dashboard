import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="px-3">
      <table className=" shadow-md rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-300 bg-gray-50 text-left text-sm font-semibold text-gray-600">
              Model Year
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-300 bg-gray-50 text-center text-sm font-semibold text-gray-600">
              Make
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-300 bg-gray-50 text-left text-sm font-semibold text-gray-600">
              Electric Range
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-300 bg-gray-50 text-center text-sm font-semibold text-gray-600">
              City  
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-300 bg-gray-50 text-left text-sm font-semibold text-gray-600">
              State
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100 font-serif font-normal text-sm">
              <td className="py-2 px-4 border-b border-gray-200">{row['Model Year']}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row['Make']}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row['Electric Range']}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row['City']}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row['State']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
