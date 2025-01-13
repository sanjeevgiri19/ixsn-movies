import React from 'react'
import { Link } from 'react-router-dom';

const Cards = ({ data, title }) => {
  return (
    <div className="text-white  px-6 py-6 bg-[#1f1e24] flex flex-wrap gap-10 overflow-hidden overflow-y-auto ">
      {data.map((c, i) => (
        <Link to={`/${title}/details/${c.id}`}
          key={i}
          className=" w-64 cursor-pointer relative rounded shadow-[2px_3px_6px_1px_rgba(80,100,20,0.3)] "
        >
          <img
            className=" px-6 pt-4 rounded"
            src={`https://image.tmdb.org/t/p/w1280/${
              c.profile_path || c.poster_path || c.backdrop_path
            } `}
            alt=""
          />
          <h2 className="overflow-hidden py-2 text-center flex justify-center">
            {c.title || c.name || c.original_title || c.original_name}
          </h2>

          {c.vote_average && (
            <div className="bg-[#3a336b] absolute font-medium right-0 bottom-[20%] h-10 w-10 rounded-full flex justify-center items-center">
              {(c.vote_average * 10).toFixed()}<sup className='mt-[4px]'>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards