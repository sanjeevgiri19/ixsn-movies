import React from "react";
import SideBar from "./templatess/sideBar";

const Home = () => {
  // document.title = "ixsn Movies";
  return (
    <div className="h-full flex ">
      <SideBar />
      {/* <div className="w-[20%] h-full bg-emerald-200"></div> */}
      <div className="w-4/5 h-full "></div>
    </div>
  );
};

export default Home;
