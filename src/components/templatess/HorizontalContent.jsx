import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const HorizontalContent = ({ data, func }) => {

      console.log(data);

  return (
    
    <div className="h-[86%] overflow-x-auto 
     px-3 py-1 mx-12 flex gap-2">
      
      {data.map((d, id) => (
        <Link to={`/${d.media_type}/details/${d.id}`}
          key={id}
          className=" text-white min-w-[180px] bg-zinc-800/70 rounded shadow-md flex flex-col items-center overflow-hidden"
        >
          <img
            className="h-28 rounded-md w-full p-1 object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.poster_path || d.profile_path
            }`}
            alt={d.title || d.name || "Movie"}
          />
          <div className="px-1 w-full">
            <h1 className="text-lg font-medium leading-tight  mb-1 text-white">
              {d.name ||
                d.title ||
                d.original_name ||
                d.original_title ||
                "Untitled"}
            </h1>
            <p className="tracking-tight leading-tight text-zinc-400  text-sm ">
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
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalContent;
