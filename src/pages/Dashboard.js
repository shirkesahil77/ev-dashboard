import React, { useEffect, useState } from "react";
import { parseEVData } from "../dataParser";
import ChartComponent from "../components/ChartComponent";
import Card from "../components/Card";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import PieChartComponent from "../components/PieChartComponent";
import { color } from "chart.js/helpers";
import UtilityProviderCount from "../components/UtilityProviderCount";
import bevImage from "../utils/assets/bev-image.png";
import phevImage from "../utils/assets/phev-image.jpg";
import evImage from "../utils/assets/ev-vehicle.jpg";
import speed from "../utils/assets/speed.png";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const debounceDelay = 300;

  useEffect(() => {
    parseEVData(setData);
  }, []);

  const pieData = data.slice(0, 50);
  const barData = data.reduce((acc, d) => {
    const make = d["Make"];
    if (make) acc[make] = (acc[make] || 0) + 1;
    return acc;
  }, {});

  const vehicleData = [
    {
      name: "Total EVs",
      value: data.length,
      image: evImage, // Icon for BEV
      color: "bg-green-200",
    },
    {
      name: "BEV",
      value: data.filter(
        (d) => d["Electric Vehicle Type"] === "Battery Electric Vehicle (BEV)"
      ).length,
      image: bevImage, // Icon for BEV
      color: "bg-blue-200",
    },
    {
      name: "PHEV",
      value: data.filter(
        (d) =>
          d["Electric Vehicle Type"] ===
          "Plug-in Hybrid Electric Vehicle (PHEV)"
      ).length,
      image: phevImage, // Icon for PHEV
      color: "bg-yellow-200",
    },
  ];

  const groupUtilitiesByEligibility = (data) => {
    const grouped = {};
    data.forEach((utility) => {
      if (
        !grouped[utility["Clean Alternative Fuel Vehicle (CAFV) Eligibility"]]
      ) {
        grouped[utility["Clean Alternative Fuel Vehicle (CAFV) Eligibility"]] =
          [];
      }
      grouped[
        utility["Clean Alternative Fuel Vehicle (CAFV) Eligibility"]
      ].push(utility);
    });
    return grouped;
  };

  const groupedUtilities = groupUtilitiesByEligibility(data);

  const electricRanges = data
    .map((record) => Number(record["Electric Range"]))
    .filter((range) => !isNaN(range)); // Filtering out invalid entries

  const maxRange = Math.max(...electricRanges);

  // Step 3: Adding min and max to vehicleData
  vehicleData.push({
    name: "Max Electric Range",
    value: maxRange,
    image: speed,
    color: "bg-purple-200",
  });
  const barDataArray = Object.entries(barData).map(([key, value]) => ({
    name: key,
    value,
  }));

  const recordsPerPage = 10;

  useEffect(() => {
    const handler = setTimeout(() => {
      const lowerCaseFilter = filter.toLowerCase();

      const filtered = data.filter(
        (item) =>
          item.Make?.toLowerCase().includes(lowerCaseFilter) ||
          item.Model?.toLowerCase().includes(lowerCaseFilter)
      );

      setFilteredData(filtered);
    }, debounceDelay);

    return () => clearTimeout(handler); // Cleanup timeout on filter change
  }, [filter, data]);
  const startIndex = currentPage * recordsPerPage;
  const paginatedData = filteredData?.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  return (
    <div className="space-y-8 top-12 py-5 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
        {vehicleData.map((item, index) => (
          <Card
            key={index}
            title={item.name}
            value={item.value}
            image={item.image}
            color={item.color}
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-col lg:flex-row  gap-4 px-2">
        <div className="flex-1 shadow-lg">
          <PieChartComponent data={pieData} />
        </div>

        <div className="flex-1 shadow-lg">
          <ChartComponent data={barDataArray.slice(0, 100)} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 px-2">
        <div className="px-2">
          <div className="relative mb-4 w-64 ml-4">
            <i className="bi bi-search text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
            <input
              type="text"
              placeholder="Search by Make or Model..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-gray-100 text-gray-700 rounded pl-10 pr-4 py-2 w-full focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>

          <Table data={paginatedData} />
          <Pagination
            totalRecords={filteredData.length}
            recordsPerPage={recordsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
        <div className="px-4 w-15">
          <h6 className="text-base  text-start  ml-4 font-extralight text-black mb-2">
            Additional Information
          </h6>
          {Object.entries(groupedUtilities).map(([eligibility, utilities]) => (
            <UtilityProviderCount
              key={eligibility}
              eligibility={eligibility}
              utilities={utilities}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
