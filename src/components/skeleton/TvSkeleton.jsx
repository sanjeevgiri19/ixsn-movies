import React from "react";

const TVDetailSkeleton = () => {
  return (
    <div className="bg-gray-900 text-white font-sans antialiased">
      {/* Header */}
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="bg-gray-300 animate-pulse h-6 w-24 rounded"></div>{" "}
          {/* Placeholder for logo */}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Poster Placeholder */}
          <div className="md:col-span-1">
            <div className="rounded-lg shadow-md bg-gray-300 animate-pulse h-64 w-64"></div>
          </div>

          {/* Middle Column: Details Placeholders */}
          <div className="md:col-span-2">
            <div className="space-y-3">
              <div className="bg-gray-300 animate-pulse h-8 w-1/2 rounded"></div>{" "}
              {/* Title */}
              <div className="flex items-center text-gray-400 mb-4">
                <div className="bg-gray-300 animate-pulse h-4 w-1/4 rounded mr-2"></div>{" "}
                {/* Date */}
                <div className="bg-gray-300 animate-pulse h-4 w-1/4 rounded"></div>{" "}
                {/* Genre */}
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-gray-300 animate-pulse h-6 w-20 rounded-full mr-2"></div>{" "}
                {/* User Score */}
                <div className="bg-gray-300 animate-pulse h-4 w-1/3 rounded"></div>{" "}
                {/* Tagline */}
              </div>
              <div className="mb-6">
                <div className="bg-gray-300 animate-pulse h-6 w-1/3 rounded mb-2"></div>{" "}
                {/* Overview Title */}
                <div className="bg-gray-300 animate-pulse h-4 w-3/4 rounded"></div>{" "}
                {/* Overview line 1 */}
                <div className="bg-gray-300 animate-pulse h-4 w-5/6 rounded"></div>{" "}
                {/* Overview line 2 */}
                <div className="bg-gray-300 animate-pulse h-4 w-2/3 rounded"></div>{" "}
                {/* Overview line 3 */}
              </div>
              <div>
                <div className="bg-gray-300 animate-pulse h-10 w-32 rounded"></div>{" "}
                {/* Trailer Button */}
              </div>
            </div>
          </div>
        </div>

        {/* Seasons Section Placeholder */}
        <div className="mt-12">
          <div className="bg-gray-300 animate-pulse h-6 w-1/4 rounded mb-4"></div>{" "}
          {/* Seasons Title */}
          <div className="flex overflow-x-auto space-x-4">
            {/* Season Cards Placeholders */}
            {[...Array(7)].map((_, index) => (
              <div key={index} className="w-48 flex-shrink-0">
                <div className="rounded-lg shadow-md bg-gray-300 animate-pulse h-32 w-full"></div>
                <div className="bg-gray-300 animate-pulse h-4 w-1/2 rounded mt-2 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <div className="bg-gray-300 animate-pulse h-4 w-1/4 rounded mx-auto"></div>{" "}
          {/* Footer text */}
        </div>
      </footer>
    </div>
  );
};

export default TVDetailSkeleton;
