import React, { useEffect } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import HorizontalContent from "../templatess/HorizontalContent";
import Trailer from "../Trailer";
import Loading from "../Loading";

const MovieDetails = () => {
  // const { info } = useSelector((state) => state.movie);
  const { info } = useSelector((state) => state.movie);
  // console.log(info.detail.title);
  console.log(info);

  //  const { detail, recommendations, similar, videos } = info;
  //  console.log(info.detail);

  // console.log(info);

  // const {pathname} = useParams()
  const pathname = location.pathname;

  console.log(pathname);

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
        background: `linear-gradient(rgba(120, 150, 200, 0.6), rgba(150, 100, 20, 0.6)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className=" relative w-screen min-h-screen text-zinc-50 pt-[2%] px-[3%]"
    >
      {/* part-1 links and stuffs */}
      <div className="flex gap-4 text-xl bg-zinc-500/20 w-40 ">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line"
        ></Link>
        <a href={info.detail.homepage}>
          <i target="_blank" className="ri-movie-2-line"></i>
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

      {/* images, titles, trailers, descriptions  */}
      <div className=" flex w-full h-[57%]  mt-1">
        {/* img  */}
        <div className="w-[18%]  mr-10 ">
          <img
            className="rounded-md w-[90%] h-[100%] p-1 filter saturate-100 -hue-rotate-180 "
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path || info.detail.backdrop_path
            }`}
            alt="wow"
          />
        </div>

        {/* detailsssss */}
        <div className="flex gap-3  w-[70%] p-2 flex-col">
          {/* Title  */}
          <div className="flex ">
            <h2 className="text-3xl font-bold">
              {info.detail.original_title ||
                info.detail.original_name ||
                info.detail.title ||
                info.detail.name}
            </h2>
            <h3 className="mt-1 font-medium p-1 text-lg">
              ({info.detail.release_date.split("-")[0]})
            </h3>
          </div>

          {/* date, genres, runtime */}
          <div className="flex  gap-5">
            <h3 className="text-lg flex font-medium">
              <div className="h-2 mt-[10px] mr-[3px] w-2 rounded-full bg-blue-100"></div>
              {info.detail.release_date}
            </h3>
            <h3 className="text-lg flex font-medium">
              <div className="h-2 w-2 mt-[11px] mr-[3px] rounded-full bg-blue-100"></div>
              {info.detail.genres.map((m) => m.name).join(", ")}
            </h3>
            <h3 className="text-lg flex font-medium">
              <div className="h-2 mt-[11px] mr-[3px] w-2 rounded-full bg-blue-100"></div>
              {info.detail.runtime}min
            </h3>
          </div>

          {/*vote average and solgans*/}
          <div className=" flex  gap-x-1">
            {info.detail.vote_average && (
              <div className="bg-[#6958d4] font-medium text-[24px] h-12 w-12 rounded-full flex justify-center items-center">
                {(info.detail.vote_average * 10).toFixed()}
                <sup className="text-sm">%</sup>
              </div>
            )}
            <h2 className="flex text-lg leading-5 mt-1 font-medium  flex-col">
              User <span>Score</span>
            </h2>

            <div className="text-2 flex ml-7 text-2xl font-semibold mt-2">
              {info.detail.tagline}
            </div>
          </div>

          {/* Overviews and descriptions */}
          <div className=" ">
            <h2 className="text-[30px] font-semibold">Overview</h2>
            <p className="text-md leading-5">{info.detail.overview}</p>
          </div>

          {/* Trailer */}
          <Link
            to={`${pathname}/trailer`}
            className="bg-purple-600 px-5 py-1 w-32 flex items-center justify-center text-xl gap-1 rounded-lg"
          >
            <i className="ri-play-circle-fill mt-[4px]"></i>Trailer
          </Link>
        </div>
      </div>

      {/* Recommendations and similars */}
      <div className=" my-2 ">
        <h2 className="text-xl font-semibold m-2">Recommendations</h2>
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
    <Loading />
  );
};

export default MovieDetails;
