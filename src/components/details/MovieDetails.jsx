import React, { useEffect } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import HorizontalContent from "../templatess/HorizontalContent";
import Trailer from "../mainPages/Trailer";
import NoPoster from "/noImagePoster.webp";
import MovieDetailSkeleton from "../skeleton/MovieSkeleton";
import CardSkeleton from "../skeleton/CardSkeleton";

const MovieDetails = () => {

  const { info } = useSelector((state) => state.movie);
  const pathname = location.pathname;
  // console.log(pathname);

  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [dispatch, id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen min-h-screen text-zinc-50 p-4"
    >
      <div className="flex gap-4 text-lg bg-zinc-500/20 w-40 p-2 rounded-md mb-2">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line"
        ></Link>
        <a href={info.detail.homepage} target="_blank">
          <i className="ri-movie-2-line"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-global-line"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.detail.imdb_id}`}
        >
          imdb
        </a>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-[70%] md:w-[23%] lg:w-[18%] flex justify-center md:justify-start">
          <img
            className="rounded-md w-[90%] max-w-xs md:max-w-none h-auto p-2 shadow-lg"
            src={
              info.detail.poster_path || info.detail.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${
                    info.detail.poster_path || info.detail.backdrop_path
                  }`
                : NoPoster
            }
            alt="Movie Poster"
          />
        </div>

        <div className="w-full md:w-[70%] p-2 flex flex-col gap-3">
          <div className="flex gap-2 md:flex-row md:items-center ">
            <h2 className="text-2xl font-bold">
              {info.detail.original_title ||
                info.detail.original_name ||
                info.detail.title ||
                info.detail.name}
            </h2>
            <h3 className="mt-1 font-medium  text-lg">
              ({info.detail.release_date.split("-")[0]})
            </h3>
          </div>

          <div className="flex flex-wrap gap-4 text-zinc-300">
            <h3 className="text-[14px] md:text-xl lg:text-[17px] font-medium flex items-center">
              <div className="h-2 w-2 mr-2 rounded-full bg-zinc-200"></div>
              {info.detail.release_date}
            </h3>
            <h3 className="text-[14px] md:text-xl lg:text-[17px] font-medium flex items-center">
              <div className="h-2 w-2 mr-2 rounded-full bg-zinc-200"></div>
              {info.detail.genres.map((m) => m.name).join(", ")}
            </h3>
            <h3 className="text-[14px] md:text-xl lg:text-[17px] font-medium flex items-center">
              <div className="h-2 w-2 mr-2 rounded-full bg-zinc-200"></div>
              {info.detail.runtime}min
            </h3>
          </div>

          <div className="flex md:flex-row gap-4">
            <div className="flex gap-2 items-center">
              <div className="bg-zinc-600/90 font-medium text-[18px] h-12 w-12 rounded-full flex justify-center items-center">
                {info.detail.vote_average
                  ? (info.detail.vote_average * 10).toFixed()
                  : "N/A"}
                <sup className="text-sm">%</sup>
              </div>
              <h2 className="text-md text-zinc-300 leading-5 font-medium flex flex-col">
                User <span>Score</span>
              </h2>
            </div>

            <div className="text-[14px] md:text-xl lg:text-[17px] font-semibold text-zinc-300 items-center mt-2 p-2 md:mt-0">
              {info.detail.tagline}
            </div>
          </div>

          <div className="mt3">
            <h2 className="text-xl font-semibold text-zinc-200">Overview</h2>
            <p className="text-[14px] md:text-xl lg:text-[17px] text-zinc-300 leading-6">
              {info.detail.overview}
            </p>
          </div>

          <Link
            to={`${location.pathname}/trailer`}
            className="bg-zinc-400 hover:bg-zinc-600/70 hover:text-zinc-200 text-black px-5 py-2 w-32 flex items-center justify-center text-xl gap-1 rounded-lg mt-2"
          >
            <i className="ri-play-circle-fill mt-[4px]"></i>Trailer
          </Link>
        </div>
      </div>

      <div className="mt-8">
        {info.recommendations  && (
          <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
        ) }

        <div className="overflow-x-auto">
          {info.recommendations ? (
            <HorizontalContent data={info.recommendations} />
          ) : (
            ""
          )}
        </div>
      </div>

      <Outlet />
    </div>
  ) : (
    // <MovieDetailSkeleton />
    <CardSkeleton />
  );
};

export default MovieDetails;
