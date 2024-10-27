// src/components/SummaryCard.js
import React from 'react';

function SummaryCard({ title, value }) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <h2 className="text-lg md:text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2 md:mt-4 font-bold">{value}</p>
    </div>
  );
}

export default SummaryCard;
