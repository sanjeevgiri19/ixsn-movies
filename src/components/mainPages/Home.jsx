import React, { useEffect, useState } from "react";
import SideBar from "../templatess/SideBar";
import TopNav from "../templatess/TopNav";
import Header from "../templatess/Header";
import HorizontalContent from "../templatess/HorizontalContent";
import Loading from "../skeleton/Loading";
import axios from "../../utils/axios";
import Dropdown from "../templatess/Dropdown";
// import HomePageSkeleton from "../skeleton/HomeSkeleton";
import CardSkeleton from "../skeleton/CardSkeleton";

const Home = () => {
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [popular, setPopular] = useState(null);
  const [topRated, setTopRated] = useState(null);
  const [onTheAir, setOnTheAir] = useState(null);
  const [category, setCategory] = useState("all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const GetWallpaper = async () => {
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
      // data.results.map((d) => console.log("d", d.vote_average));
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
      console.error("Error fetching on the air content:", error);
    }
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  // Fetch data on mount and when category changes
  useEffect(() => {
    if (!wallpaper) GetWallpaper();
    getTrendingContent();
    getPopularContent();
    getTopRatedContent();
    getOnTheAirContent();
  }, [category]);

  return trending && wallpaper && popular && topRated && onTheAir ? (
    <div className="bg-[#1d1c22] w-[100%] overflow-x-hidden flex">
      {isSidebarOpen && <SideBar onClose={() => setIsSidebarOpen(false)} />}

      <div
        className={`h-full  transition-all  relative duration-300 ${
          isSidebarOpen ? "w-[83%]" : "w-full"
        }`}
      >
        <button
          onClick={() => setIsSidebarOpen(true)}
          className={`${
            isSidebarOpen ? "hidden" : "block"
          } text-white absolute cursor-pointer z-50 lg:left-44 left-3 top-5 px-2 py-[2px] text-xl hover:bg-zinc-400/20 rounded-full ml-auto mr-4`}
        >
          <i className="ri-menu-line"></i>
        </button>

        <Header data={wallpaper} />

        <div className="h-[45vh] w-full">
          <div className="flex justify-between">
            <h1 className="font-semibold text-lg p-2 ml-8 mt-3 text-white">
              Trending
            </h1>
            <Dropdown
              title="Filter"
              onselect={handleCategoryChange}
              options={["tv", "movie", "all"]}
            />
          </div>
          <HorizontalContent data={trending} />
        </div>

        <div className="h-[45vh] w-full">
          <h1 className="font-semibold text-lg p-2 ml-8 mt-16 text-white">
            Popular
          </h1>
          <HorizontalContent data={popular} />
        </div>

        <div className="h-[45vh] w-full">
          <h1 className="font-semibold text-lg p-2 ml-8 mt-12 text-white">
            Top Rated
          </h1>
          <HorizontalContent data={topRated} />
        </div>

        <div className="h-[45vh] w-full">
          <h1 className="font-semibold text-lg p-2 ml-8 mt-12 text-white">
            On The Air (TV Shows)
          </h1>
          <HorizontalContent data={onTheAir} />
        </div>
      </div>
    </div>
  ) : (
    // <Loading />
    // <HomePageSkeleton />
    <CardSkeleton />
  );
};

export default Home;
