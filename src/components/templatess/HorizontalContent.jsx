import React from "react";
import { Link } from "react-router-dom";
import NoPoster from "/noImagePoster.webp";

import Dropdown from "./Dropdown";

const HorizontalContent = ({ data }) => {
  // console.log(data);
  // console.log("Data item", data);
  // console.log("Data item", data.media_type);

  return (
    <div
      className="h-[85%] mx-6 relative overflow-x-auto 
     px-3 pt-2 pb-4 flex gap-3"
    >
      {data.map((d, id) => (
        <Link
          to={`/${d.media_type || d.title ? "movie" : "tv"}/details/${d.id}`}
          key={id}
          className=" text-white min-w-[240px] bg-zinc-800/1 shadow-[2px_3px_6px_1px_rgba(80,100,20,0.3)] rounded flex flex-col items-center overflow-hidden"
        >
          <img
            title={d.title || d.original_name || d.original_title || d.name}
            className="h-36 rounded-md w-full p-1 object-cover"
            src={
              d.backdrop_path || d.poster_path || d.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    d.backdrop_path || d.poster_path || d.profile_path
                  }`
                : NoPoster
            }
            alt={d.title || d.name || "Movie"}
          />
          <div className="px-1 w-full">
            <div className="text-lg font-medium leading-5  mr-5  mb-1 text-white">
              {(d.name || d.title || d.original_name || d.original_title)
                .length > 22 ? (
                <h2>{(d.title || d.name).slice(0, 22)}...</h2>
              ) : (
                d.title || d.name
              )}
            </div>
            {/* <p className="tracking-tight leading-tight text-zinc-400  text-sm ">
              {d.overview.length < 83 ? (
                d.overview
              ) : (
                <>
                  {d.overview.slice(0, 83)}...{" "}
                  <Link className="text-zinc-300 hover:text-blue-500">
                    more
                  </Link>
                </>
              )}
            </p> */}

            <div className="flex items-start mt-2 justify-between">
              <h1 className="tracking-tight leading-tight text-zinc-300  text-lg font-semibold ">
                {d.release_date || d.first_air_date}
              </h1>
              <h1 className="tracking-tight leading-tight text-zinc-200 ">
                {d.vote_average ? (
                  <div className="bg-zinc-300/30 font-medium px-3 py-1  flex justify-center items-center">
                    <i className="ri-star-fill mr-1 text-[#fcf25c]"></i>{" "}
                    {d.vote_average.toFixed(1)}
                    {/* <sup className="mt-[14px] ml-[2px] text-md">%</sup> */}
                  </div>
                ) : (
                  ""
                )}
              </h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalContent;
