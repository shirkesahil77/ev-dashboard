import React,{useState, useEffect} from 'react'
import EVMap from "../components/EvMap";
import { parseEVData } from "../dataParser"; 
const VehicleLocations = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        parseEVData(setData);
      }, []);
    const mapData = data.slice(0,10)
  return (
    <div>
        VehicleLocations
        <EVMap data={mapData} />
    </div>
  )
}

export default VehicleLocations