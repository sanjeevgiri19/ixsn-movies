import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  // Use a higher-resolution image (e.g., w1280 or w1920)
  const backgroundImage =
    data.backdrop_path || data.poster_path || data.profile_path
      ? `https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path || data.profile_path
        }`
      : null;

  // console.log(backgroundImage);

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
      className="w-[90%] flex rounded justify-end flex-col p-3 mx-auto h-[50vh]"
    >
      <div className="p-2 mb-2">
        <h1 className="text-2xl font-medium  text-white ">
          {data.name || data.title || data.original_name || data.original_title}
        </h1>
        <p className="tracking-tighter my-1 leading-tight text-zinc-300 w-[52%] text-sm ">
          {data.overview.length < 150 ? (
            data.overview
          ) : (
            <>
              {data.overview.slice(0, 150)}...{" "}
              <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400 hover:text-blue-500">more</Link>
            </>
          )}
        </p>
        <div className="flex gap-10 mb-4 text-white">
          <h2 className="">{data.release_date || "No Info"}</h2>
          <h3>{data.media_type.toUpperCase()}</h3>
        </div>
    <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="text-white rounded  bg-[#6556CD] px-3 py-2 ">Watch Trailer</Link>
      </div>
    </div>
  );
};

export default Header;








//  to={`/movies/details/${data.id}/trailer` }