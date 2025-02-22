import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import NotFound from "../components/NotFound";
import Loading from "./Loading";
import CardSkeleton from "./skeleton/CardSkeleton";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category]?.info?.videos);

  // Loading state
  if (!ytvideo) {
    return (
      <div className="flex items-center justify-center h-screen bg-purple-700/70 text-white">
        {/* <Loading /> */}
        <CardSkeleton />
      </div>
    );
  }

  // No trailer available
  if (!ytvideo.key) {
    return <NotFound />;
  }

  return (
    <div className="bg-purple-700/70 p-10 top-0 absolute left-0 w-full h-full">
      <div className="h-[90%] w-[90%] ml-16">
        <i
          onClick={() => navigate(-1)}
          className="ri-close-line cursor-pointer text-2xl bg-zinc-700/90 text-white rounded-lg hover:bg-black/40"
        ></i>

        <ReactPlayer
          width="100%"
          height="100%"
          controls={true}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      </div>
    </div>
  );
};

export default Trailer;
