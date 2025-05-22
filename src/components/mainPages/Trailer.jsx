import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../skeleton/Loading";
import CardSkeleton from "../skeleton/CardSkeleton";
import NotFound from "../pages/NotFound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category]?.info?.videos);

  if (!ytvideo) {
    return (
      <div className="flex items-center justify-center h-screen bg-purple-700/70 text-white">
        <CardSkeleton />
      </div>
    );
  }

  if (!ytvideo.key) {
    return <NotFound />;
  }

  return (
    <div className="bg-purple-700/70 p-4 md:p-10 top-0 absolute left-0 w-full h-full">
      <div className="h-[90%] w-full md:w-[90%] mx-auto">
        <i
          onClick={() => navigate(-1)}
          className="ri-close-line cursor-pointer text-2xl bg-zinc-700/90 text-white rounded-lg hover:bg-black/40 absolute top-4 right-4 md:top-10 md:right-10"
        ></i>

        <div className="relative pt-[56.25%]">
          {" "}
          {/* 16:9 Aspect Ratio */}
          <ReactPlayer
            className="absolute top-10 left-0"
            width="100%"
            height="100%"
            controls={true}
            url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Trailer;
