import React, { useEffect } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/peopleActions";
import Loading from "../skeleton/Loading";
import NoPoster from "/noImagePoster.webp";

const PersonDetails = () => {
  const { info } = useSelector((state) => state.person);
  // console.log(info);

  const navigate = useNavigate();

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [dispatch, id]);

  if (!info) {
    return <Loading />;
  }

  const { detail, images, tvCredits, movieCredits } = info;

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(10, 10, 10, 0.6)), url(https://image.tmdb.org/t/p/original/${info?.detail?.profile_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className=" relative  min-h-screen text-zinc-50 "
    >
      <div className="h-full bg-zinc-600/20 text-gray-900 px-5 py-2">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-white font-bold text-2xl"
        ></Link>
        <div className="flex flex-col mt-3 md:flex-row items-center md:items-start gap-10 mb-12">
          <img
            className="w-56  rounded object-cover shadow-lg"
            src={`https://image.tmdb.org/t/p/original/${detail.profile_path}`}
            alt={detail.name}
          />

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-zinc-100">{detail.name}</h1>
            <p className="text-lg text-gray-200">{detail.biography}</p>
            <div className="flex flex-wrap gap-4">
              {detail.birthday && (
                <div className="bg-gray-500/30 p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-white">Birthday</h2>
                  <p className="text-gray-200">{detail.birthday}</p>
                </div>
              )}
              <div className="bg-gray-500/20 p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-white">
                  Place of Birth
                </h2>
                <p className="text-zinc-200">{detail.place_of_birth}</p>
              </div>
              {detail.gender && (
                <div className="bg-zinc-500/20 p-4 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold text-white">Gender</h2>

                  <p className="text-white">
                    {detail.gender === 2 ? "Male" : "Female"}
                  </p>
                </div>
              )}
              {detail.known_for_department && (
                <div className="bg-zinc-500/20 p-4 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold text-white">
                    Known For
                  </h2>
                  <p className="text-white">{detail.known_for_department}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-12">
          <a
            href={`https://www.instagram.com/${detail.external_ids?.instagram_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-100 hover:text-[#fafbfb]"
          >
            Instagram
          </a>
          <a
            href={`https://www.twitter.com/${detail.external_ids?.twitter_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-100 hover:text-[#fafbfb]"
          >
            Twitter
          </a>
          <a
            href={`https://www.facebook.com/${detail.external_ids?.facebook_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-100 hover:text-[#fafbfb]"
          >
            Facebook
          </a>
          <a
            href={`https://www.wikipedia.org/wiki/${detail.external_ids?.wikidata_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-100 hover:text-[#fafbfb]"
          >
            Wikipedia
          </a>
        </div>

        {info.images?.profiles?.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Photos</h2>
            <div className="flex overflow-x-scroll gap-4">
              {info.images.profiles.map((c, i) => (
                <img
                  key={i}
                  src={
                    c.file_path &&
                    `https://image.tmdb.org/t/p/original/${c.file_path}`
                  }
                  alt=""
                  className="w-40 h-60 rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        )}

        {info.tvCredits?.cast?.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              TV Credits
            </h2>
            <div className="flex overflow-x-scroll gap-4">
              {info.tvCredits.cast.map((c, i) => (
                <Link
                  to={`/tv/details/${c.id}`}
                  key={i}
                  className="flex-shrink-0 w-40"
                >
                  <img
                    src={
                      c.poster_path || c.backdrop_path || c.profile_path
                        ? `https://image.tmdb.org/t/p/original/${
                            c.poster_path || c.backdrop_path || c.profile_path
                          }`
                        : NoPoster
                    }
                    alt={c.name}
                    className="w-full h-56 rounded-lg shadow-md"
                  />
                  <h3 className="text-sm text-white mt-2">{c.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Movie Credits Section */}
        {info.movieCredits?.cast?.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              Movie Credits
            </h2>
            <div className="flex overflow-x-scroll gap-4">
              {info.movieCredits.cast.map((c, i) => (
                <Link
                  to={`/movie/details/${c.id}`}
                  key={i}
                  className="flex-shrink-0 w-40"
                >
                  <img
                    src={
                      c.poster_path || c.profile_path
                        ? `https://image.tmdb.org/t/p/original/${
                            c.poster_path || c.profile_path
                          }`
                        : NoPoster
                    }
                    alt={c.title}
                    className="w-full h-60 rounded-lg shadow-md"
                  />
                  <h3 className="text-sm mt-2 text-white font-semibold">
                    {c.title}
                  </h3>
                  <p className="text-xs text-gray-50">{c.character}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
