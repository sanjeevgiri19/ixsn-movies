import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="text-white px-4 py-4 sm:p-6 lg:p-7 bg-[#1f1e24] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-7 overflow-hidden overflow-y-auto ">
      {data.map((c, i) => (
        <Link
          to={`/${title}/details/${c.id}`}
          key={i}
          className=" w-72 sm:w-52 md:w-56 lg:w-64 block cursor-pointer relative rounded-md shadow-[2px_3px_6px_1px_rgba(80,100,20,0.3)] "
        >
          <img
            className="w-full h-64 sm:h-64 md:h-72 lg:h-72  px-6  rounded"
            src={`https://image.tmdb.org/t/p/w1280/${
              c.profile_path || c.poster_path || c.backdrop_path
            } `}
            alt=""
          />
          <h2 className="overflow-hidden py-2 text-center flex justify-center">
            {c.title || c.name || c.original_title || c.original_name}
          </h2>

          {c.vote_average ? (
            <div className="bg-zinc-500/70 absolute font-medium right-0 bottom-[20%] h-10 w-10 rounded-full flex justify-center items-center">
              {c.vote_average ? (c.vote_average * 10).toFixed() : "N/A"}
              <sup className="mt-[4px]">%</sup>
            </div>
          ) : 
          ""}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
