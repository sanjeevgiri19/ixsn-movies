import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-1/5 h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-white flex  font-medium text-4xl">
        <i className="ri-tv-fill "></i>
        <div className="ml-1 flex-col text-sm tracking-wide leading-tight pt-[2px]">
          <span className="block">ixsn</span>
          <span className="block">movies</span>
        </div>
      </h1>

      <h1 className="text-white font-medium text-lg py-5">New Feeds</h1>
      <nav className="text-zinc-300 flex text-lg flex-col">
        <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300 ">
          <i class="ri-fire-fill"></i> Trending
        </Link>
        <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300 ">
          <i class="ri-movie-2-fill"></i> Movies
        </Link>
        <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300  ">
          <i class="ri-tv-fill"></i> TV Shows
        </Link>
        <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300 ">
          <i class="ri-fire-fill"></i> Kids
        </Link>
        <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300 ">
          <i class="ri-fire-fill"></i> Documentaries
        </Link>
        <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300  ">
          <i class="ri-bard-fill"></i> Popular
        </Link>
        <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300  ">
          <i class="ri-team-fill "></i> Peoples
        </Link>
      </nav>
      <hr className="mt-2 border-none h-[1px] bg-zinc-500" />
      <h1 className="text-white font-medium text-lg py-5">
        Website Information
      </h1>
      <nav className="flex flex-col text-white text-lg">
        <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300 ">
          <i class="ri-information-fill"></i> About
        </Link>
        <Link className="hover:bg-[#6556CD] p-2 hover:text-white rounded-lg py-3 duration-300 ">
          <i class="ri-phone-fill"></i> Contact
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
