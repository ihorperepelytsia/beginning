import React, { useState , useEffect } from "react";
import { getTrending } from "../services/api";
// import { Outlet } from "react-router-dom";
const HomePage = () => {
  const [trending, setTrending] = useState([])

  useEffect(())
  console.log(getTrending);
  return (
    <>
      <div>HomePage</div>
      {/* <Outlet /> */}
    </>
  );
};
export default HomePage;
