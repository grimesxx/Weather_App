import { Routes, Route } from "react-router-dom";

import Weather from "../Component/Weather.jsx";

import Forecast from "../Pages/Forecast.jsx";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Weather />} />
      
      <Route path="/Forecast" element={<Forecast />} />
    </Routes>
  );
};

export default MyRoutes;