import React from "react";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";

const Header = ({ data }) => {
  // Use a higher-resolution image (e.g., w1280 or w1920)
  const backgroundImage =
    data.backdrop_path || data.poster_path || data.profile_path
      ? `https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path || data.profile_path
        }`
      : null;

  return (
    <div
      style={{
        background: backgroundImage
          ? `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("${backgroundImage}")`
          : `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4), rgba(0,0,0,0.6)), #1a1a1a`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen  w-[96%] flex rounded justify-end flex-col px-6 py-10 mx-auto relative top-3  md:w-[93%] lg:w-[98%]"
    >
      <TopNav />

      
      <Link to={`/${data.media_type}/details/${data.id}`} className="p-2  mb-2">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-medium text-white">
          {data.name || data.title || data.original_name || data.original_title}
        </h1>
        <p className="my-1 text-zinc-300 w-full md:w-[60%] lg:w-[50%] text-xs md:text-base">
          {data.overview.length < 150 ? (
            data.overview
          ) : (
            <>
              {data.overview.slice(0, 150)}...{" "}
              <Link
                to={`/${data.media_type}/details/${data.id}`}
                className="text-blue-400 hover:text-blue-500"
              >
                more
              </Link>
            </>
          )}
        </p>
        <div className="flex gap-6 md:gap-12 mb-4 text-white text-sm md:text-base">
          <h2>{data.release_date || "No Info"}</h2>
          <h3>{data.media_type.toUpperCase()}</h3>
        </div>
        <Link
          to={`/${data.media_type}/details/${data.id}/trailer`}
          className="text-black rounded bg-zinc-400 hover:bg-zinc-200/40 hover:text-white font-medium px-2 py-2 text-sm lg:px-3 lg:py-2 md:text-base"
        >
          Watch Trailer
        </Link>
      </Link>
    </div>
  );
};

export default Header;
