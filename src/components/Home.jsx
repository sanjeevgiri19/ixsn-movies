import React, { useEffect, useState } from "react";
import SideBar from "./templatess/sideBar";
import TopNav from "./templatess/TopNav";
import Header from "./templatess/Header";
import axios from "../utils/axios";
import HorizontalContent from "./templatess/HorizontalContent";
import Dropdown from "./templatess/Dropdown";
const Home = () => {
  // document.title = "ixsn Movies";

  const [wallpaper, setWallpaper] = useState("");
  const [content, setContent] = useState(null);
  const [category, setCategory] = useState("all");

  //background wallpaper
  const Getwallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/week`);
      let randomPhoto =
        data.results[(Math.random() * data.results.length).toFixed()];
      // console.log(randomPhoto);

      setWallpaper(randomPhoto);
      // console.log(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  //trending contents
  const getContent = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/week`);

      setContent(data.results);
      // console.log(data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  // console.log(content);

  // Handle category change
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory); // Update the category state
  };

  useEffect(() => {
    !wallpaper && Getwallpaper();
    getContent();
  }, [category]);

  return content && wallpaper ? (
    <div className="h-full  flex ">
      <SideBar />
      {/* <div className="w-[20%] h-full bg-emerald-200"></div> */}
      <div className="w-4/5 h-full ">
        <TopNav />
        <Header data={wallpaper} />
        <div className=" h-[38vh] w-full">
          <div className="flex justify-between">
            <h1 className="font-semibold text-lg p-2 ml-14 text-white">
              Trending
            </h1>
            <Dropdown
              onselect={handleCategoryChange}
              options={["tv", "movie", "all"]}
              // func={(e) => setCategory(e.target.value)}
            />
          </div>
          <HorizontalContent data={content} />
        </div>
      </div>
    </div>
  ) : (
    <h1 className="text-white font-semibold text-4xl flex justify-center mx-auto items-center">Loading...</h1>
  );
};

export default Home;
