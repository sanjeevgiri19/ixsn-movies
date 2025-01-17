import React, { useEffect, useState } from "react";
import TopNav from "./templatess/TopNav";
import Dropdown from "./templatess/Dropdown";
import { useNavigate } from "react-router-dom";
import Cards from "./templatess/Cards";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

const Tv = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  // const [duration, setduration] = useState("day");
  const [tv, setTv] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "ixsn | TV";

  const getTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      // setTrending(data.results);
      if (data.results.length > 0) {
        setTv((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
      // console.log(data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  // console.log(tv);

  const handleCategoryChange = (selectedCategory) => {
    setcategory(selectedCategory); // Update the category state
  };

  const refreshTv = () => {
    if (tv.length === 0) {
      getTv();
    } else {
      setTv([]);
      setpage(1);
      getTv();
      // sethasMore(true);
    }
  };

  useEffect(() => {
    refreshTv();
  }, [category]);

  return (
    <div className="h-full w-full ">
      <div className=" flex justify-between bg-[#1d1c22] p-3 items-center h-[12%]">
        <h1
          onClick={() => navigate(-1)}
          className="w-[20%] cursor-pointer text-zinc-200 p-5 font-semibold text-xl "
        >
          <i className="ri-arrow-left-line mr-2 text-xl"></i>
          TV
          <span className="text-sm ml-2">({category.replace(/_/g, " ").toUpperCase()})</span>
        </h1>
        <TopNav />
        <div className="flex w-[22%] pr-2">
          <Dropdown
            title={"Category"}
            onselect={handleCategoryChange}
            options={["airing_today", "top_rated", "on_the_air", "popular"]}
          />
        </div>
      </div>

      <div className="w-full">
        <InfiniteScroll
          dataLength={tv.length}
          next={getTv}
          loader={<Loading />}
          endMessage={<h1>You have reached to end, chalo ghar jao aab !!</h1>}
          hasMore={hasMore}
        >
          <Cards data={tv} title="tv" />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Tv;
