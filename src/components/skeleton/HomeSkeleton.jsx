import React from "react";

const HomePageSkeleton = () => {
  return (
    <div className="bg-gray-900 text-white font-sans antialiased overflow-hidden h-screen w-screen">
      <header className="bg-transparent absolute top-0 left-0 w-full z-10">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="bg-gray-300 animate-pulse mx-12 h-6 w-6 rounded-full"></div>

          {/* Search Bar Placeholder */}
          <div className="relative w-1/2 max-w-lg">
            <div className="absolute inset-y-0 -left-8 flex items-center pl-3 pointer-events-none">
              <div className="bg-gray-300 animate-pulse h-5 w-5 rounded-full"></div>
            </div>
            <div className="bg-gray-300 animate-pulse h-8 rounded-full w-full"></div>
          </div>

          {/* Login Button Placeholder */}
          <div className="bg-gray-300 animate-pulse h-8 w-20 rounded-full"></div>
        </div>
      </header>

      {/* Main Content Skeleton */}
      <main className="relative pt-32 h-full">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0">
          <div className="bg-gray-300 animate-pulse w-full h-full object-cover object-top opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>

        {/* Movie Details Placeholder */}
        <div className="container mx-auto px-4 justify-end absolute bottom-12 left-10">
          <div className="max-w-2xl">
            {/* Title Placeholder */}
            <div className="bg-gray-300 animate-pulse h-12 w-1/2 rounded mb-4"></div>

            {/* Description Placeholder */}
            <div className="bg-gray-300 animate-pulse h-4 w-3/4 rounded mb-2"></div>
            <div className="bg-gray-300 animate-pulse h-4 w-5/6 rounded mb-2"></div>
            <div className="bg-gray-300 animate-pulse h-4 w-2/3 rounded mb-6"></div>

            {/* Date and Type Placeholder */}
            <div className="flex items-center text-gray-400 mb-4">
              <div className="bg-gray-300 animate-pulse h-4 w-1/4 rounded mr-2"></div>
              <div className="bg-gray-300 animate-pulse h-4 w-1/4 rounded"></div>
            </div>

            {/* Button Placeholder */}
            <div className="bg-gray-300 animate-pulse h-10 w-32 rounded-full"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePageSkeleton;
