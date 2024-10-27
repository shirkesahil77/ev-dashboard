import React, { useState } from 'react';
import bevImage from '../utils/assets/fuel-cell.png'; // Replace with actual path
import phevImage from '../utils/assets/fuel.png'; // Replace with actual path
import evImage from '../utils/assets/power.png'; // Replace with actual path

const eligibilityMap = {
  "Clean Alternative Fuel Vehicle Eligible": {
    label: "CAFV Eligible",
    image:  bevImage, // Image for eligible vehicles
  },
  "Eligibility unknown as battery range has not been researched": {
    label: "Unknown Eligibility",
    image: phevImage, // Image for unknown eligibility vehicles
  },
  "Not eligible due to low battery range": {
    label: "Not Eligible",
    image: evImage, // Image for not eligible vehicles
  },
};

const UtilityProviderCount = ({ eligibility, utilities }) => {
  const [showMore, setShowMore] = useState(false);

  // Check if utilities is an array and filter based on eligibility
  if (!Array.isArray(utilities)) {
    console.error("Utilities is not an array:", utilities);
    return null; // Handle error gracefully
  }

  // Count utility providers based on eligibility
  const filteredUtilities = utilities.filter(
    utility => utility['Clean Alternative Fuel Vehicle (CAFV) Eligibility'] === eligibility
  );

  const eligibleCount = filteredUtilities.length;
  const displayedUtilities = showMore ? filteredUtilities : filteredUtilities.slice(0, 5); // Show only the first 5 by default
  const eligibilityInfo = eligibilityMap[eligibility];

  // Return null if eligibility info doesn't exist or if there are no eligible utilities
  if (!eligibilityInfo || eligibleCount === 0) {
    return null;
  }

  // Determine text color based on eligibility count
  const countColor = eligibleCount > 10000 ? 'text-green-600 rounded-full bg-green-300' : 'text-red-600 rounded-full bg-red-300';

  return (
    <div className="bg-white gap-10 flex items-center justify-between rounded-lg p-5 m-4 shadow-lg border border-gray-300 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-4">
        <img src={eligibilityInfo.image} alt={eligibilityInfo.label} className="w-16 h-16 object-contain" />
        <h2 className="text-xl font-bold mb-3 text-black">{eligibilityInfo.label}</h2>
      </div>
      <p className="text-gray-700 text-lg">
        <span className={`p-2 font-semibold ${countColor}`}>{eligibleCount}</span>
      </p>
    </div>
  );
};

export default UtilityProviderCount;
