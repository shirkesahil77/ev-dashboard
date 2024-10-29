import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="px-3 overflow-auto">
      <table className="shadow-md rounded w-full table-fixed">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-300 bg-gray-50 text-left text-sm font-semibold text-gray-600 min-w-[120px]">
              Model Year
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-300 bg-gray-50 text-center text-sm font-semibold text-gray-600 min-w-[150px]">
              Make
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-300 bg-gray-50 text-left text-sm font-semibold text-gray-600 min-w-[150px]">
              Electric Range
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-300 bg-gray-50 text-center text-sm font-semibold text-gray-600 min-w-[100px]">
              City  
            </th>
            <th className="py-2 px-4 border-b-2 border-gray-300 bg-gray-50 text-left text-sm font-semibold text-gray-600 min-w-[120px]">
              State
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100 font-serif font-normal text-sm">
              <td className="py-2 px-4 border-b border-gray-200 overflow-hidden text-ellipsis">{row['Model Year']}</td>
              <td className="py-2 px-4 border-b border-gray-200 overflow-hidden text-ellipsis">{row['Make']}</td>
              <td className="py-2 px-4 border-b border-gray-200 overflow-hidden text-ellipsis">{row['Electric Range']}</td>
              <td className="py-2 px-4 border-b border-gray-200 overflow-hidden text-ellipsis">{row['City']}</td>
              <td className="py-2 px-4 border-b border-gray-200 overflow-hidden text-ellipsis">{row['State']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
