import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";

const MovieDetails = () => {
  // const { info } = useSelector((state) => state.movie);
  const { info } = useSelector((state) => state.movie);
  // console.log(info.detail.title);
  console.log(info);

  //  const { detail, recommendations, similar, videos } = info;
  //  console.log(info.detail);

  // console.log(info.detail);

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
        background: `linear-gradient(rgba(20,190,250,0.7), rgba(10,160,200,0.8), rgba(20,180,250,0.6)) ,url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen w-screen text-zinc-50 p-[3%]"
    >
      {/* part-1 links and stuffs */}
      <div className="flex gap-3 text-xl bg-zinc-500/20 w-40 ">
        <Link onClick={() => navigate(-1)} class="ri-arrow-left-line"></Link>
        <a href={info.detail.homepage}>
          <i target="_blank" class="ri-movie-2-line"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i class="ri-global-line"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.detail.imdb_id}`}
        >
          imdb
        </a>
      </div>

      <div className=" flex  gap-2 mt-8">
        <div className="w-[35%] mr-10 ">
          <img
            className="rounded-md w-64 filter saturate-100 -hue-rotate-180 h-96"
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path || info.detail.backdrop_path
            }`}
            alt="wow"
          />
        </div>

        {/* 1st row */}
        <div className="flex gap-5 p-3 flex-col">
          <div className="flex">
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

          {/* 2nd row */}
          <div className="flex gap-5">
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

          {/* 3rd row */}
          <div className=" flex gap-x-1">
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

          {/* 4th row */}

          <div className="w-[70%]">
            <h2 className="text-[30px] font-semibold">Overview</h2>
            <p className="text-md leading-5">{info.detail.overview}</p>
          </div>

          <Link
            to={`${pathname}/trailer`}
            className="bg-purple-600 px-5 py-1 w-32 flex items-center justify-center text-xl gap-1 rounded-lg"
          >
            <i class="ri-play-circle-fill mt-[4px]"></i>Trailer
          </Link>


          {/* recommendations videos */}
          <div>
            <h2>Recommendations</h2>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default MovieDetails;
