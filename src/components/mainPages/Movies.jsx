import React, { useEffect, useState } from "react";
import TopNav from "../templatess/TopNav";
import Dropdown from "../templatess/Dropdown";
import { useNavigate } from "react-router-dom";
import Cards from "../templatess/Cards";
import axios from "../../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../skeleton/Loading";
import { BounceLoader } from "react-spinners";
import CardSkeleton from "../skeleton/CardSkeleton";

const Movies = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  // const [duration, setduration] = useState("day");
  const [movie, setMovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  // document.title = "ixsn | Movies";
  useEffect(() => {
    document.title = "ixsn | Movies";
  }, []);

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);

      // setTrending(data.results);
      if (data.results.length > 0) {
        // setMovie((prev) => [...prev, ...data.results]);
        setMovie((prev) => {
          const newResults = data.results.filter(
            (item) => !prev.some((p) => p.id === item.id)
          );
          return [...prev, ...newResults];
        });
        setpage((prev) => prev + 1);
      } else {
        sethasMore(false);
      }
      // console.log(data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  // console.log(movie);

  const handleCategoryChange = (selectedCategory) => {
    setcategory(selectedCategory); // Update the category state
  };

  const refreshMovie = () => {
    if (movie.length === 0) {
      getMovies();
    } else {
      setMovie([]);
      setpage(1);
      getMovies();
      sethasMore(true);
    }
  };

  useEffect(() => {
    refreshMovie();
  }, [category]);

  return (
    <div className="h-full w-full ">
      <div className=" flex justify-between bg-[#1d1c22] p-3 items-center h-[12%]">
        <h1
          onClick={() => navigate(-1)}
          className="w-[22%] cursor-pointer text-zinc-200 p-5 font-semibold text-xl "
        >
          <i className="ri-arrow-left-line mr-2 text-xl"></i>
          Movies
          <span className="text-base ml-2">
            ({category.replace(/_/g, " ")})
          </span>
        </h1>
        {/* <TopNav /> */}
        <div className="flex w-[26%] pr-2">
          <Dropdown
            title={"Category"}
            onselect={handleCategoryChange}
            options={["now_playing", "top_rated", "upcoming", "popular"]}
          />
        </div>
      </div>

      <div className="w-full items-center justify-center">
        <InfiniteScroll
          dataLength={movie.length}
          next={getMovies}
          // loader={<Loading />}
          loader={<CardSkeleton />}
          // loader={<Loader />}
          endMessage={<h1>You have reached to end, chalo ghar jao aab !!</h1>}
          hasMore={hasMore}
        >
          <Cards data={movie} title="movie" />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Movies;
