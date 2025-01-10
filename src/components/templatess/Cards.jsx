import React from 'react'

const Cards = ({ data, title }) => {
  return (
    <div className="text-white  px-6 py-6 bg-[#1f1e24] flex flex-wrap gap-10 overflow-hidden overflow-y-auto ">
      {data.map((c, i) => (
        <div
          key={i}
          className=" w-64 cursor-pointer rounded shadow-[2px_3px_6px_1px_rgba(80,100,20,0.3)] "
        >
          <img
            className=" px-6 pt-4 rounded"
            src={`https://image.tmdb.org/t/p/w200/${
              c.poster_path || c.profile_path
            } `}
            alt=""
          />
          <h2 className="overflow-hidden py-2 text-center flex justify-center">
            {c.title || c.name || c.original_title || c.original_name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Cards