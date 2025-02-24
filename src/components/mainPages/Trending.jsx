import React, { useEffect, useState } from "react";
import TopNav from "../templatess/TopNav";
import Dropdown from "../templatess/Dropdown";
import { useNavigate } from "react-router-dom";
import Cards from "../templatess/Cards";
import axios from "../../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../skeleton/Loading";
import CardSkeleton from "../skeleton/CardSkeleton";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [duration, setduration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  // document.title = "ixsn | Trending"
  useEffect(() => {
    document.title = "ixsn | Trending";
  }, []);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        setTrending((prev) => [...prev, ...data.results]);
        // setTrending((prev) => {
        //   const newResults = data.results.filter(
        //     (item) => !prev.some((p) => p.id === item.id)
        //   );
        //   return [...prev, ...newResults];
        // });
        setpage(page + 1);
        // setpage((prev) => prev + 1);
      } else {
        sethasMore(false);
      }
      // console.log(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };
  // console.log(trending.results.media_type);

  const handleCategoryChange = (selectedCategory) => {
    setcategory(selectedCategory); // Update the category state
  };
  const handleDurationChange = (selectedDuration) => {
    setduration(selectedDuration);
  };

  const refreshTrending = () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      setTrending([]);
      setpage(1);
      getTrending();
      // sethasMore(true);
    }
  };

  useEffect(() => {
    refreshTrending();
  }, [category, duration]);

  return (
    <div className="h-full w-full ">
      <div className=" flex justify-between bg-[#1d1c22] p-3 items-center h-[12%]">
        <h1
          onClick={() => navigate(-1)}
          className="w-[20%] cursor-pointer text-zinc-200 p-5 font-semibold text-xl "
        >
          <i className="ri-arrow-left-line mr-2 text-xl"></i>
          Trending
        </h1>
        {/* <TopNav /> */}
        <div className="flex w-[22%] pr-2">
          <Dropdown
            title={"Category"}
            onselect={handleCategoryChange}
            options={["all", "movie", "tv"]}
          />
          <Dropdown
            title={"Duration"}
            onselect={handleDurationChange}
            options={["all", "week", "day"]}
          />
        </div>
      </div>

      <div className="w-full ">
        <InfiniteScroll
          dataLength={trending.length}
          next={getTrending}
          // loader={<Loading />}
          loader={<CardSkeleton />}
          endMessage={<h1>You have reached to end, chalo ghar jao aab !!</h1>}
          hasMore={hasMore}
        >
          <Cards data={trending} title={category} />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Trending;
