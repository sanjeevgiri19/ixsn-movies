import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ onClose }) => {
  const [isExtended, setisExtended] = useState(false);

  return (
    <div className="w-[15%] sticky top-0 mt-3 h-full border-r-2 border-zinc-400 px-6 ">
      <button
        onClick={onClose}
        className="absolute top-0 right-4  text-white rounded-full"
        aria-label="Close Sidebar"
      >
        <i
          onClick={() => setisExtended((prev) => !prev)}
          className="ri-close-line cursor-pointer text-zinc-400 hover:text-zinc-200 hover:bg-zinc-400/20 rounded-full text-3xl block max-w-10 w-9 h-9 mt-6 font-medium"
        ></i>
      </button>

      <div className="flex  justify-between">
        <h1 className="text-white flex pt-5 font-medium text-4xl">
          <i className="ri-tv-fill"></i>
          <div className="ml-1 flex-col text-sm tracking-wide leading-tight pt-[3px]">
            <span className="block">ixsn</span>
            <span className="block">movies</span>
          </div>
        </h1>
        {/* <i
          onClick={() => setisExtended((prev) => !prev)}
          className="ri-menu-line cursor-pointer text-zinc-400 hover:text-zinc-200 hover:bg-[#6556cd] rounded-full text-2xl block max-w-10 w-10 h-10 mt-6 pl-2 pt-[4px] font-semibold"
        ></i> */}
      </div>

      {/* Extended Menu */}
      {/* {isExtended && ( */}
      <div>
        <h1 className="text-white  font-medium text-lg py-6">New Feeds</h1>
        <nav className="text-zinc-300  gap-5 flex text-lg flex-col">
          <Link
            to="/trending"
            className="hover:bg-zinc-400/20 p-2 hover:text-white rounded-lg py-1 duration-300"
          >
            <i className="ri-fire-fill"></i> Trending
          </Link>
          <Link
            to="/popular"
            className="hover:bg-zinc-400/20 p-2 hover:text-white rounded-lg py-1 duration-300"
          >
            <i className="ri-bard-fill"></i> Popular
          </Link>
          <Link
            to="/movies"
            className="hover:bg-zinc-400/20 p-2 hover:text-white rounded-lg py-1 duration-300"
          >
            <i className="ri-movie-2-fill"></i> Movies
          </Link>
          <Link
            to="/tv"
            className="hover:bg-zinc-400/20 p-2 hover:text-white rounded-lg py-1 duration-300"
          >
            <i className="ri-tv-fill"></i> TV Shows
          </Link>
          <Link
            to="/person"
            className="hover:bg-zinc-400/20 p-2 hover:text-white rounded-lg py-1 duration-300"
          >
            <i className="ri-team-fill"></i> Peoples
          </Link>
          <Link
            to="/recommendations"
            className="hover:bg-zinc-400/20 p-2 hover:text-white rounded-lg py-1 duration-300"
          >
            <i className="ri-bard-fill"></i> AI
          </Link>
        </nav>
        <hr className="mt-4 border-none h-[1px] bg-zinc-500" />
        <h1 className="text-white  font-medium text-lg py-5">
          Web Information
        </h1>
        <nav className="flex flex-col gap-4 text-white text-lg">
          <Link
            to="/canvas"
            className="hover:bg-zinc-400/20 p-2 hover:text-white rounded-lg py-1 duration-300"
          >
            <i className="ri-edit-line"></i> Canvas
          </Link>
          <Link
            to="/contact"
            className="hover:bg-zinc-400/20 p-2 hover:text-white rounded-lg py-1 duration-300"
          >
            <i className="ri-phone-fill"></i> Contact
          </Link>
          <Link
            to="/about"
            className="hover:bg-[#A45EE9] p-2 hover:text-white rounded-lg py-1 duration-300"
          >
            <i className="ri-information-fill"></i> About
          </Link>
        </nav>
      </div>
      {/* )} */}
    </div>
  );
};

export default SideBar;

