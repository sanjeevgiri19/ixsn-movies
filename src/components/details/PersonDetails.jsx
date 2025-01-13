import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/peopleActions";

const PersonDetails = () => {
  const { info } = useSelector((state) => state.person);
  console.log(info);
  
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
    return (
      <div className="flex items-center justify-center h-screen text-2xl">
        Loading...
      </div>
    );
  }

  const { detail, images, tvCredits, movieCredits } = info;

  return info?  (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        {/* Profile Image */}
        <img
          className="w-48 h-48 rounded-full object-cover shadow-lg"
          src={`https://image.tmdb.org/t/p/original/${detail.profile_path}`}
          alt={detail.name}
        />

        {/* Person Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-purple-700">{detail.name}</h1>
          <p className="text-lg text-gray-700">{detail.biography}</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-blue-600">Birthday</h2>
              <p className="text-gray-700">{detail.birthday}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-blue-600">
                Place of Birth
              </h2>
              <p className="text-gray-700">{detail.place_of_birth}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-blue-600">
                Gender
              </h2>
              <p className="text-gray-700">{detail.gender}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-blue-600">Known For</h2>
              <p className="text-gray-700">{detail.known_for_department}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 mb-12">
        <a
          href={`https://www.instagram.com/${detail.external_ids?.instagram_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 hover:text-purple-800"
        >
          Instagram
        </a>
        <a
          href={`https://www.twitter.com/${detail.external_ids?.twitter_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 hover:text-purple-800"
        >
          Twitter
        </a>
        <a
          href={`https://www.facebook.com/${detail.external_ids?.facebook_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 hover:text-purple-800"
        >
          Facebook
        </a>
        <a
          href={`https://www.wikipedia.org/wiki/${detail.external_ids?.wikidata_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 hover:text-purple-800"
        >
          Wikipedia
        </a>
      </div>

      {/* Images Section */}
      {info.images?.profiles?.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-500 mb-4">Photos</h2>
          <div className="flex overflow-x-scroll gap-4">
            {info.images.profiles.map((c, i) => (
              <img
                key={i}
                src={`https://image.tmdb.org/t/p/original/${c.file_path}`}
                alt=""
                className="w-40 h-60 rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      )}

      {/* TV Credits Section */}
      {info.tvCredits?.cast?.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-500 mb-4">TV Credits</h2>
          <div className="flex overflow-x-scroll gap-4">
            {info.tvCredits.cast.map((c, i) => (
              <div key={i} className="flex-shrink-0 w-40">
                <img
                  src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}`}
                  alt={c.name}
                  className="w-full h-60 rounded-lg shadow-md"
                />
                <h3 className="text-sm mt-2">{c.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Movie Credits Section */}
      {info.movieCredits?.cast?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-blue-500 mb-4">Movie Credits</h2>
          <div className="flex overflow-x-scroll gap-4">
            {info.movieCredits.cast.map((c, i) => (
              <div key={i} className="flex-shrink-0 w-40">
                <img
                  src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.profile_path}`}
                  alt={c.title}
                  className="w-full h-60 rounded-lg shadow-md"
                />
                <h3 className="text-sm mt-2 font-semibold">{c.title}</h3>
                <p className="text-xs text-gray-600">{c.character}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-gray-500 text-xl">Loading...</h1>
    </div>
  );
};

export default PersonDetails;
