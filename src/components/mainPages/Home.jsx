import React, { useEffect, useState } from "react";
import SideBar from "../templatess/SideBar";
import Header from "../templatess/Header";
import HorizontalContent from "../templatess/HorizontalContent";
import Dropdown from "../templatess/Dropdown";
import CardSkeleton from "../skeleton/CardSkeleton";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";

const Home = () => {
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [popular, setPopular] = useState(null);
  const [movies, setMovies] = useState(null);
  const [tv, setTv] = useState(null);
  const [topRated, setTopRated] = useState(null);
  const [onTheAir, setOnTheAir] = useState(null);
  const [category, setCategory] = useState("all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [isModalOpen, setisModalOpen] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/week`);
      const randomPhoto =
        data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomPhoto);
    } catch (error) {
      console.error("Error fetching wallpaper:", error);
    }
  };

  const getTrendingContent = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/week`);
      setTrending(data.results);
    } catch (error) {
      console.error("Error fetching trending content:", error);
    }
  };

  const getPopularContent = async () => {
    try {
      const [movies, tvShows] = await Promise.all([
        axios.get(`/movie/popular`),
        axios.get(`/tv/popular`),
      ]);
      setPopular([...movies.data.results, ...tvShows.data.results]);
    } catch (error) {
      console.error("Error fetching popular content:", error);
    }
  };

  const getTopRatedContent = async () => {
    try {
      const [movies, tvShows] = await Promise.all([
        axios.get(`/movie/top_rated`),
        axios.get(`/tv/top_rated`),
      ]);
      setTopRated([...movies.data.results, ...tvShows.data.results]);
    } catch (error) {
      console.error("Error fetching top-rated content:", error);
    }
  };

  const getOnTheAirContent = async () => {
    try {
      const { data } = await axios.get(`/tv/on_the_air`);
      setOnTheAir(data.results);
    } catch (error) {
      console.error("Error fetching on-the-air content:", error);
    }
  };

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`/movie/now_playing`);
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  const getTv = async () => {
    try {
      const { data } = await axios.get(`/tv/airing_today`);
      setTv(data.results);
    } catch (error) {
      console.error("Error fetching TV:", error);
    }
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };
  

  // Fetch all data on mount and when category changes
  useEffect(() => {
    if (!wallpaper) getWallpaper();
    getTrendingContent();
    getPopularContent();
    getTopRatedContent();
    getOnTheAirContent();
    getMovies();
    getTv();
  }, [category]);

  if (!trending || !wallpaper || !popular || !topRated || !onTheAir) {
    return <CardSkeleton />;
  }

  return (
    <div className="bg-[#1d1c22] w-full  overflow-x-hidden flex">
      {isSidebarOpen && <SideBar onClose={() => setIsSidebarOpen(false)} />}

      <div
        className={`h-full transition-all relative duration-300 ${
          isSidebarOpen ? "w-[100%]" : "w-full"
        }`}
      >
        <button
          onClick={() => setIsSidebarOpen(true)}
          className={`${
            isSidebarOpen ? "hidden" : "block"
          } text-white absolute cursor-pointer z-50 lg:left-44 left-3 top-5 px- py-[2px] text-xl hover:bg-zinc-400/20 rounded-full ml-auto mr-4`}
        >
          <i className="ri-menu-line"></i>
        </button>

        <Header data={wallpaper} />

        <div className="h-[45vh] w-full">
          <Link to="/trending" className="flex justify-between">
            <h1 className="font-semibold text-lg p-2 ml-8 mt-3 text-white">
              Trending
            </h1>
            <Dropdown
              title="Filter"
              onselect={handleCategoryChange}
              options={["tv", "movie", "all"]}
            />
          </Link>
          <HorizontalContent data={trending} />
        </div>

        <Link to="/popular" className="h-[45vh] w-full">
          <h1 className="font-semibold text-lg p-2 ml-8 mt-16 text-white">
            Popular
          </h1>
          <HorizontalContent data={popular} />
        </Link>

        <Link to="/top_rated" className="h-[45vh] w-full">
          <h1 className="font-semibold text-lg p-2 ml-8 mt-2 text-white">
            Top Rated
          </h1>
          <HorizontalContent data={topRated} />
        </Link>

        <Link to="/on_the_air" className="h-[45vh] w-full">
          <h1 className="font-semibold text-lg p-2 ml-8 mt-2 text-white">
            On The Air (TV Shows)
          </h1>
          <HorizontalContent data={onTheAir} />
        </Link>

        <Link to="/movies" className="h-[45vh] w-full">
          <h1 className="font-semibold text-lg p-2 ml-8 mt-2 text-white">
            Movies (Now Playing)
          </h1>
          <HorizontalContent data={movies} />
        </Link>

        <Link to="/tv" className="h-[45vh] w-full">
          <h1 className="font-semibold text-lg p-2 ml-8 mt-3 text-white">
            TV (Airing Today)
          </h1>
          <HorizontalContent data={tv} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
