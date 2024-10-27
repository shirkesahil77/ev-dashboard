// src/components/Card.js
import React from 'react';

const Card = ({ title, value, image, color }) => {
  return (
    <div className={`${color} shadow-lg rounded-lg p-4 flex items-center space-x-4`}>
      {/* Render the image if provided */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-16 h-16 object-contain" // Adjust size as needed
        />
      )}
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default Card;
