import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";
import NoPoster from "/noImagePoster.webp";
import { useAuth0 } from "@auth0/auth0-react";

const TopNav = () => {
  const { user, loginWithRedirect, logout, isLoading, isAuthenticated } =
    useAuth0();
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  const GetSearches = async () => {
    try {
      setIsSearchLoading(true);
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsSearchLoading(false);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (query) {
        GetSearches();
      } else {
        setSearches([]);
      }
    }, 500);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white flex w-full sm:w-5/6 top-0 left-0 sm:left-10 z-50 absolute items-center justify-center sm:justify-start lg:ml-60 md:ml-16 mt-2 px-4 sm:px-0">
      {/* Search Icon */}
      <i className="ri-search-line mr-3 lg:text-xl md:text-xl sm:text-lg" aria-label="Search"></i>

      {/* Search Input */}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 placeholder-gray-400  sm:px-5 py-1 lg:py-2 bg-transparent w-[60%] sm:w-[60%] outline-none hover:border-[2px] rounded-lg text-zinc-200 hover:border-zinc-300 border-[2px] border-zinc-500"
        type="text"
        placeholder="Search Movies, TV's, and more..."
      />

      {/* Clear Search Icon */}
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="ri-close-line text-2xl cursor-pointer ml-3"
          aria-label="Clear search"
        ></i>
      )}

      {/* Search Results Dropdown */}
      {query.length > 0 && (
        <div className="bg-zinc-400/50 z-50 absolute max-h-[38vh] lg:max-h-[44vh] top-[110%] overflow-auto rounded-md w-[53%] md:w-[54%] lg:w-[56%] md:left-[54px] sm:left-12">
          {isSearchLoading ? (
            <div className="flex justify-center items-center p-4">
              <i className="ri-loader-4-line animate-spin text-2xl"></i>
            </div>
          ) : (
            searches.map((s, idx) => (
              <Link
                to={`/${s.media_type}/details/${s.id}`}
                className="p-3 flex justify-start items-center border-b-2 border-zinc-200 w-full font-semibold hover:text-zinc-300 text-[12px] lg:text-xl hover:bg-zinc-600/70 duration-300"
                key={idx}
              >
                {/* Search Result Image */}
                <img
                  className="h-8 w-8 lg:h-10 lg:w-10 mr-4 object-cover rounded"
                  src={
                    s.poster_path || s.profile_path
                      ? `https://image.tmdb.org/t/p/w200/${
                          s.poster_path || s.profile_path
                        }`
                      : NoPoster
                  }
                  alt={
                    s.title ||
                    s.name ||
                    s.original_name ||
                    s.original_title ||
                    "Poster"
                  }
                />

                {/* Search Result Title */}
                <span>
                  {s.name ||
                    s.title ||
                    s.original_name ||
                    s.original_title ||
                    "Unknown Title"}
                </span>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default TopNav;

{
  /* Login logout ko credentials */
}
// <div className="flex ml-auto gap-4 mr-20">
//   {isAuthenticated ? (
//     <div className="flex items-center gap-4">
//       <div className="flex items-center gap-2">
//         <span className="text-zinc-400">{user.name}</span>
//       </div>
//       <button
//         onClick={() =>
//           logout({ logoutParams: { returnTo: window.location.origin } })
//         }
//         className="bg-red-500 text-white px-4 py-2 font-semibold font-lg rounded-lg hover:bg-red-600 transition-colors"
//       >
//         Logout
//       </button>
//     </div>
//   ) : (
//     <button
//       className="bg-blue-400/50 px-4 ml-auto py-2 font-semibold text-lg rounded-lg hover:bg-blue-500 duration-300"
//       onClick={() => loginWithRedirect()}
//     >
//       Login
//     </button>
//   )}
// </div>
