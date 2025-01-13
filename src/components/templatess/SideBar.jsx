// import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "../../utils/axios"

const SideBar = () => {
  return (
    <div className="w-1/5 h-full border-r-2 border-zinc-400 px-8">
      <h1 className="text-white flex pt-4 font-medium text-4xl">
        <i className="ri-tv-fill "></i>
        <div className="ml-1 flex-col text-sm tracking-wide leading-tight pt-[2px]">
          <span className="block">ixsn</span>
          <span className="block">movies</span>
        </div>
      </h1>

      <h1 className="text-white font-medium text-lg py-5">New Feeds</h1>
      <nav className="text-zinc-300 flex text-lg flex-col">
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300 "
        >
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300  ">
          <i className="ri-bard-fill"></i> Popular
        </Link>
        <Link to="/movies" className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300 ">
          <i className="ri-movie-2-fill"></i> Movies
        </Link>
        <Link to="/tv" className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300  ">
          <i className="ri-tv-fill"></i> TV Shows
        </Link>
        {/* <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300 ">
          <i className="ri-fire-fill"></i> Kids
        </Link>
        <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300 ">
          <i className="ri-fire-fill"></i> Documentaries
        </Link> */}
        <Link to="/person" className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300  ">
          <i className="ri-team-fill "></i> Peoples
        </Link>
      </nav>
      <hr className="mt-2 border-none h-[1px] bg-zinc-500" />
      <h1 className="text-white font-medium text-lg py-5">
        Website Information
      </h1>
      <nav className="flex flex-col text-white text-lg">
        <Link to="/about" className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300 ">
          <i className="ri-information-fill"></i> About
        </Link>
        <Link to="/contact" className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300 ">
          <i className="ri-phone-fill"></i> Contact
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const SideBar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       {/* Toggle Button for Mobile */}
//       <button
//         onClick={toggleSidebar}
//         className="fixed lg:hidden z-50 top-4 left-4 p-2 bg-[#6556CD] text-white rounded-lg"
//       >
//         <i className="ri-menu-line"></i>
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed lg:relative w-64 lg:w-1/5 h-full border-r-2 border-zinc-400 p-10 bg-zinc-900 transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
//       >
//         {/* Close Button for Mobile */}
//         <button
//           onClick={toggleSidebar}
//           className="lg:hidden absolute top-4 right-4 p-2 bg-[#6556CD] text-white rounded-lg"
//         >
//           <i className="ri-close-line"></i>
//         </button>

//         <h1 className="text-white flex font-medium text-4xl">
//           <i className="ri-tv-fill"></i>
//           <div className="ml-1 flex-col text-sm tracking-wide leading-tight pt-[2px]">
//             <span className="block">ixsn</span>
//             <span className="block">movies</span>
//           </div>
//         </h1>

//         <h1 className="text-white font-medium text-lg py-5">New Feeds</h1>
//         <nav className="text-zinc-300 flex text-lg flex-col">
//           <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300">
//             <i className="ri-fire-fill"></i> Trending
//           </Link>
//           <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300">
//             <i className="ri-movie-2-fill"></i> Movies
//           </Link>
//           <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300">
//             <i className="ri-tv-fill"></i> TV Shows
//           </Link>
//           <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300">
//             <i className="ri-fire-fill"></i> Kids
//           </Link>
//           <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300">
//             <i className="ri-fire-fill"></i> Documentaries
//           </Link>
//           <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300">
//             <i className="ri-bard-fill"></i> Popular
//           </Link>
//           <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300">
//             <i className="ri-team-fill"></i> Peoples
//           </Link>
//         </nav>
//         <hr className="mt-2 border-none h-[1px] bg-zinc-500" />
//         <h1 className="text-white font-medium text-lg py-5">
//           Website Information
//         </h1>
//         <nav className="flex flex-col text-white text-lg">
//           <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300">
//             <i className="ri-information-fill"></i> About
//           </Link>
//           <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300">
//             <i className="ri-phone-fill"></i> Contact
//           </Link>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default SideBar;
