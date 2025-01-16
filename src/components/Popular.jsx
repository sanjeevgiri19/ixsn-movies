import React, { useEffect, useState } from "react";
import TopNav from "./templatess/TopNav";
import Dropdown from "./templatess/Dropdown";
import { useNavigate } from "react-router-dom";
import Cards from "./templatess/Cards";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

const Popular = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  // const [duration, setduration] = useState("day");
  const [popular, setPopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "ixsn | Popular";

  const getPopular = async () => {
    try {
      const { data } = await axios.get(
        `/${category}/popular?page=${page}`
      );

      // setTrending(data.results);
      if (data.results.length > 0) {
        setPopular((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
      // console.log(data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  console.log(popular);

  const handleCategoryChange = (selectedCategory) => {
    setcategory(selectedCategory); // Update the category state
  };


  const refreshPopular = () => {
    if (popular.length === 0) {
      getPopular();
    } else {
      setPopular([]);
      setpage(1);
      getPopular();
      // sethasMore(true);
    }
  };

  useEffect(() => {
    refreshPopular();
  }, [category]);

  return (
    <div className="h-full w-full ">
      <div className=" flex justify-between bg-[#1d1c22] p-3 items-center h-[12%]">
        <h1
          onClick={() => navigate(-1)}
          className="w-[20%] cursor-pointer text-zinc-200 p-5 font-semibold text-xl "
        >
          <i className="ri-arrow-left-line mr-2 text-xl"></i>
          Popular
        </h1>
        <TopNav />
        <div className="flex w-[22%] pr-2">
          <Dropdown
            title={"Category"}
            onselect={handleCategoryChange}
            options={["tv", "movie"]}
          />
         
        </div>
      </div>

      <div className="w-full">
        <InfiniteScroll
          dataLength={popular.length}
          next={getPopular}
          loader={<Loading />}
          endMessage={<h1>You have reached to end, chalo ghar jao aab !!</h1>}
          hasMore={hasMore}
        >
          <Cards data={popular} title={category} />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Popular;
