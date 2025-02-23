import React, { useEffect } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import HorizontalContent from "../templatess/HorizontalContent";
import NoPoster from "/noImagePoster.webp";
import Trailer from "../mainPages/Trailer";
import MovieDetailSkeleton from "../skeleton/MovieSkeleton";
import CardSkeleton from "../skeleton/CardSkeleton";

const TvDetails = () => {

  // const { info } = useSelector((state) => state.tv);
  const { info } = useSelector((state) => state.tv);

  // console.log(info.detail.title);
  // console.log(info);

  //  const { detail, recommendations, similar, videos } = info;
  //  console.log(info.detail);

  // console.log(info);

  // const {pathname} = useParams()
  const pathname = location.pathname;

  // console.log(pathname);

  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [dispatch, id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(120, 150, 200, 0.6), rgba(150, 100, 20, 0.6)), url(https://image.tmdb.org/t/p/original/${info?.detail?.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen min-h-screen text-zinc-50 p-4"
    >
      {/* Navigation Links */}
      <div className="flex gap-3 text-lg bg-zinc-500/20 w-40 p-2 rounded-md mb-2">
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

      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Poster - Centered on small screens, left on larger screens */}
        <div className="w-[70%] md:w-[23%] lg:w-[18%] flex justify-center md:justify-start">
          <img
            className="rounded-md w-[90%] max-w-xs md:max-w-none h-auto p-2 shadow-lg"
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path || info.detail.backdrop_path
            }`}
            alt="TV Poster"
          />
        </div>

        {/* TV Details */}
        <div className="w-full md:w-[70%] p-2 flex flex-col gap-2">
          <div className="flex md:flex-row md:items-center gap-2">
            <h2 className="text-2xl font-bold">
              {info.detail.name ||
                info.detail.original_name ||
                info.detail.title}
            </h2>
            <h3 className="mt-1 font-medium text-lg">
              ({info.detail.first_air_date.split("-")[0]})
            </h3>
          </div>

          <div className="flex flex-wrap gap-4 text-zinc-300">
            <h3 className="text-[14px] md:text-xl lg:text-[17px]  font-medium flex items-center">
              <div className="h-2 w-2 mr-2 rounded-full bg-blue-100"></div>
              {info.detail.first_air_date}
            </h3>
            <h3 className="text-[14px] md:text-xl lg:text-[17px]  font-medium flex items-center">
              <div className="h-2 w-2 mr-2 rounded-full bg-blue-100"></div>
              {info.detail.genres.map((m) => m.name).join(", ")}
            </h3>
            <h3 className="text-[14px] md:text-xl lg:text-[17px]  font-medium flex items-center">
              <div className="h-2 w-2 mr-2 rounded-full bg-blue-100"></div>
              {info.detail.number_of_seasons} seasons
            </h3>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex gap-2 items-center">
              {info.detail.vote_average && (
                <div className="bg-[#9c3ffa] font-medium text-[18px] h-12 w-12 rounded-full flex justify-center items-center">
                  {(info.detail.vote_average * 10).toFixed()}
                  <sup className="text-sm">%</sup>
                </div>
              )}
              <h2 className="text-lg text-zinc-300 leading-5 font-medium flex flex-col">
                User <span>Score</span>
              </h2>
            </div>

            <div className="text-[14px] md:text-xl lg:text-[22px]  font-semibold text-zinc-300 mt-2 p-2 md:mt-0">
              {info.detail.tagline}
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-semibold text-zinc-200">Overview</h2>
            <p className="text-[14px] md:text-xl lg:text-[17px]  text-zinc-300 leading-6">
              {info.detail.overview}
            </p>
          </div>

          <Link
            to={`${location.pathname}/trailer`}
            className="bg-zinc-200 hover:bg-[#A45EE9] hover:text-zinc-200 text-black px-5 py-2 w-32 flex items-center justify-center text-xl gap-1 rounded-lg mt-4"
          >
            <i className="ri-play-circle-fill mt-[4px]"></i>Trailer
          </Link>
        </div>
      </div>

      {/* Seasons */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Seasons</h2>
        <div className="flex gap-4 overflow-x-auto">
          {info.detail.seasons.map((d, id) => (
            <div
              key={id}
              className="min-w-[240px] bg-zinc-800/10 shadow-[2px_3px_6px_1px_rgba(80,100,20,0.3)] rounded overflow-hidden"
            >
              <img
                key={id}
                title={d.title || d.original_name || d.original_title || d.name}
                className="rounded-md w-56 h-64 p-1 object-cover"
                src={
                  d.backdrop_path || d.poster_path || d.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        d.backdrop_path || d.poster_path || d.profile_path
                      }`
                    : NoPoster
                }
                alt={d.title || d.name || "Season"}
              />
              <div className="px-2 w-full">
                <h1 className="text-lg font-medium text-center leading-5 text-white">
                  {(d.name || d.title || d.original_name || d.original_title)
                    .length > 22 ? (
                    <h2>{(d.title || d.name).slice(0, 22)}...</h2>
                  ) : (
                    d.title || d.name
                  )}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
        <div className="overflow-x-auto">
          {info.recommendations ? (
            <HorizontalContent data={info.recommendations} />
          ) : (
            <HorizontalContent data={info.similar} />
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

export default TvDetails;
