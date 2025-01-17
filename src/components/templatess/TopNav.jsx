import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";
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
    <div className="text-white flex relative w-[80%] h-[10vh] items-center justify-start ml-36 p-8">
      <i className="ri-search-line mr-3 text-xl" aria-label="Search"></i>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-5 py-2 bg-transparent w-[50%] outline-none hover:border-[1px] rounded-lg hover:border-zinc-600"
        type="text"
        placeholder="Search Movies"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="ri-close-line text-2xl cursor-pointer ml-3"
          aria-label="Clear search"
        ></i>
      )}
      <div className="bg-zinc-700/70 z-50 absolute max-h-[48vh] top-[85%] overflow-auto rounded-md w-[47%] ml-9">
        {isSearchLoading ? (
          <div className="flex justify-center items-center p-4">
            <i className="ri-loader-4-line animate-spin text-2xl"></i>
          </div>
        ) : (
          searches.map((s, idx) => (
            <Link
              to={`/${s.media_type}/details/${s.id}`}
              className="p-3 flex justify-start items-center border-b-2 border-zinc-200 w-[100%] font-semibold hover:text-zinc-300 text-lg hover:bg-zinc-600/70 duration-300"
              key={idx}
            >
              <img
                className="h-10 w-10 mr-4"
                src={
                  s.poster_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${
                        s.poster_path || s.profile_path
                      } `
                    : noimage
                }
                alt={
                  s.title ||
                  s.name ||
                  s.original_name ||
                  s.original_title ||
                  "Poster"
                }
              />
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

      <div className="flex ml-auto gap-4">
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              
              <span className="text-zinc-400">{user.name}</span>
            </div>
            <button
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              className="bg-red-500 text-white px-4 py-2 font-semibold font-lg rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-blue-500 px-4 ml-auto py-2 font-semibold text-lg rounded-lg hover:bg-blue-600 duration-300"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default TopNav;
