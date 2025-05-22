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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth < 1200);
      if (window.innerWidth >= 1200) setIsModalOpen(false); // Close modal on desktop
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

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

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white flex w-full sm:w-5/6 top-1 lg:left-52 sm:left-9 z-50 absolute items-center justify-between px-4 sm:px-0">
      <div className="flex items-center flex-grow">
        {isMobile && (
          <button
            onClick={toggleModal}
            className="mr-3 text-zinc-200 hover:text-zinc-400"
          >
            <i
              className={`ri-${isModalOpen ? "close" : "menu"}-line text-xl`}
            ></i>
          </button>
        )}

        <i
          className="ri-search-line mr-3 lg:text-xl md:text-xl sm:text-lg"
          aria-label="Search"
        ></i>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 sm:px-5 py-1 lg:py-2 bg-transparent w-full sm:w-[60%] outline-none hover:border-[2px] rounded-lg text-zinc-200 hover:border-zinc-300 border-[2px] border-zinc-500"
          type="text"
          placeholder="Search Movies, TV's, and more..."
        />

        {query.length > 0 && (
          <i
            onClick={() => setQuery("")}
            className="ri-close-line text-2xl cursor-pointer ml-3"
            aria-label="Clear search"
          ></i>
        )}
      </div>

      <div className="flex items-center gap-4 ml-4">
        {isAuthenticated ? (
          <div className="flex items-center gap-2">
            <span className="text-zinc-300 bg-zinc-500/50 px-3 py-1 rounded-lg">
              {user.name}
            </span>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-blue-400/50 px-4 py-2 rounded-lg hover:bg-blue-500 duration-300"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        )}
      </div> 

      {query.length > 0 && (
        <div className="bg-zinc-400/50 z-50 absolute max-h-[44vh] top-[110%] overflow-auto rounded-md w-[55%] md:w-[54%] lg:w-[56%] left-24 sm:left-16">
          {isSearchLoading ? (
            <div className="flex justify-center items-center p-4">
              <i className="ri-loader-4-line animate-spin text-2xl"></i>
            </div>
          ) : (
            searches.map((s, idx) => (
              <Link
                to={`/${s.media_type}/details/${s.id}`}
                className="p-3 flex items-center border-b-2 border-zinc-200 w-full font-semibold hover:text-zinc-300 text-[12px] lg:text-xl hover:bg-zinc-600/70 duration-300"
                key={idx}
              >
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

      {isMobile && isModalOpen && (
        <div className="fixed inset-0 w-64 h-[267px] top-[55px] left-[35px] bg-zinc-900/80 z-50 p-4">
          <nav className="flex flex-col text-zinc-300 ">
            <Link
              to="/trending"
              className="hover:bg-zinc-500 border-b-[1px] border-zinc-500 hover:text-white py-2 duration-300"
              onClick={toggleModal}
            >
              <i className="ri-fire-fill mr-2"></i> Trending
            </Link>
            <Link
              to="/popular"
              className="hover:bg-zinc-500/20 border-b-[1px] border-zinc-500 hover:text-white py-2 duration-300"
              onClick={toggleModal}
            >
              <i className="ri-bard-fill mr-2"></i> Popular
            </Link>
            <Link
              to="/movies"
              className="hover:bg-zinc-400/20 border-b-[1px] border-zinc-500 hover:text-white py-2 duration-300"
              onClick={toggleModal}
            >
              <i className="ri-movie-2-fill mr-2"></i> Movies
            </Link>
            <Link
              to="/tv"
              className="hover:bg-zinc-400/20 border-b-[1px] border-zinc-500 hover:text-white py-2 duration-300"
              onClick={toggleModal}
            >
              <i className="ri-tv-fill mr-2"></i> TV
            </Link>
            <Link
              to="/person"
              className="hover:bg-zinc-400/20 border-b-[1px] border-zinc-500 hover:text-white py-2 duration-300"
              onClick={toggleModal}
            >
              <i className="ri-team-fill mr-2"></i> Peoples
            </Link>
            <Link
              to="/canvas"
              className="hover:bg-zinc-400/20 border-b-[1px] border-zinc-500 hover:text-white py-2 duration-300"
              onClick={toggleModal}
            >
              <i className="ri-edit-line mr-2"></i> Canvas
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default TopNav;
