import React from "react";
import { Link } from "react-router-dom";
import NoPoster from "/noImagePoster.webp";
import Dropdown from "./Dropdown";

const HorizontalContent = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    <div className="h-full mx-6 relative overflow-x-auto px-3 pt-2 pb-4 flex gap-5">
      {data.map((d, id) => {
        const mediaType = d.media_type ? d.media_type : "tv";
        const displayTitle =
          d.name || d.title || d.original_name || d.original_title || "";
        const imagePath =
          d.backdrop_path || d.poster_path || d.profile_path
            ? `https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path || d.profile_path
              }`
            : NoPoster;

        return (
          <Link
            to={`/${mediaType}/details/${d.id}`}
            key={id}
            className="text-white min-w-[240px] bg-zinc-800/1 shadow-[2px_3px_6px_1px_rgba(80,100,20,0.3)] rounded flex flex-col items-center overflow-hidden"
          >
            <img
              title={displayTitle}
              className="h-48 rounded-md w-full p-1 object-cover"
              src={imagePath}
              alt={displayTitle || "Movie"}
            />
            <div className="px-1 w-full">
              <div className="text-lg text-center font-medium leading-5 mr-5 mb-1 text-white">
                {displayTitle.length > 22 ? (
                  <h2>{displayTitle.slice(0, 22)}...</h2>
                ) : (
                  displayTitle
                )}
              </div>

              <div className="flex items-start mt-2 mb-1 justify-between">
                <h1 className="tracking-tight leading-tight text-zinc-300 ml-2 text-lg font-semibold">
                  {d.release_date || d.first_air_date || "N/A"}
                </h1>
                <h1 className="tracking-tight leading-tight text-zinc-200">
                  {d.vote_average ? (
                    <div className="bg-zinc-500/50 font-medium px-2 py-1 mr-1 mb-1 flex justify-center items-center">
                      <i className="ri-star-fill mr-1 text-[#fcf25c]"></i>{" "}
                      {Number(d.vote_average).toFixed(1)}
                    </div>
                  ) : (
                    ""
                  )}
                </h1>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HorizontalContent;
