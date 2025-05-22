import React from "react";

const MovieDetailSkeleton = () => {
  return (
    <div className="bg-gray-900 text-white h-full w-full font-sans">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="mr-4 h-6 w-6 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="text-lg font-bold w-20 h-6 bg-gray-300 animate-pulse rounded-md"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-1">
            <div className="w-64 h-72 bg-gray-300 animate-pulse rounded-md shadow-md"></div>
          </div>

          <div className="md:col-span-2">
            <div className="h-8 w-3/4 bg-gray-300 animate-pulse mb-2 rounded-md"></div>
            <div className="h-6 w-1/2 bg-gray-300 animate-pulse mb-4 rounded-md"></div>

            <div className="flex items-center mb-4">
              <div className="bg-gray-800 rounded-full h-10 w-10 flex items-center justify-center mr-3 animate-pulse">
                <span className="text-sm font-bold text-gray-300"></span>
              </div>
              <span className="text-lg text-gray-300 animate-pulse w-20 h-6 rounded-md"></span>
            </div>

            <div className="h-4 w-full bg-gray-300 animate-pulse mb-4 rounded-md"></div>

            <div>
              <div className="h-6 w-1/3 bg-gray-300 animate-pulse mb-2 rounded-md"></div>
              <div className="h-4 w-full bg-gray-300 animate-pulse mb-2 rounded-md"></div>
              <div className="h-4 w-5/6 bg-gray-300 animate-pulse mb-4 rounded-md"></div>
            </div>

            <div className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded pulse w-32 h-12 animate-pulse"></div>
          </div>
        </div>

        <div className="mt-12">
          <div className="h-10 w-1/4 bg-gray-300 animate-pulse mb-4 rounded-md"></div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="relative">
                <div className="w-full h-52 bg-gray-300 animate-pulse rounded-md shadow-md"></div>
                <div className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-75 text-white p-2 w-full">
                  <div className="text-sm font-semibold h-4 w-3/4 bg-gray-300 animate-pulse rounded-md"></div>
                  <div className="text-xs h-4 w-1/2 bg-gray-300 animate-pulse rounded-md"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailSkeleton;
