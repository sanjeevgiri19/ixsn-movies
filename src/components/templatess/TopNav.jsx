import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg"

const TopNav = () => {
  const [query, setQuery] = useState("");
  // console.log(query);
  const [searches, setSearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
      // console.log(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="text-white flex relative w-[80%] h-[10vh] items-center justify-start ml-36 p-8">
      <i className="ri-search-line mr-3 text-xl"></i>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="px-5 py-2 bg-transparent w-[50%] outline-none hover:border-[1px] rounded-lg hover:border-zinc-600"
        type="text"
        placeholder="Search Movies"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="ri-close-line text-2xl cursor-pointer ml-3 "
        ></i>
      )}

      <div className="bg-zinc-700/70 z-50 absolute max-h-[48vh] top-[85%] overflow-auto  rounded-md w-[47%] ml-9">
        {searches.map((s, idx) => (
          <Link to={`/${s.media_type}/details/${s.id}`}
            className="p-3 flex justify-start items-center border-b-2 border-zinc-200 w-[100%] font-semibold hover:text-zinc-300 text-lg hover:bg-zinc-600/70 duration-300"
            key={idx}
          >
            <img
              className="h-10 w-10 mr-4"
              src={
                s.poster_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${
                      s.poster_path || s.profile_path
                    } `
                  : noimage
              }
              alt={
                s.title ||
                s.name ||
                s.original_name ||
                s.original_title ||
                "Poster"
              }
            />
            <span>
              {s.name ||
                s.title ||
                s.original_name ||
                original_title ||
                "Unknown Title"}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;

// import React, { useEffect, useState } from "react";
// import axios from "../../utils/axios";

// const TopNav = () => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const GetSearches = async () => {
//     if (query.trim() === "") {
//       setResults([]);
//       return;
//     }
//     try {
//       setLoading(true);
//       const response = await axios.get(`/search`, {
//         params: { query },

//       });
//       console.log(response);
//       setResults(response.data.results || []);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       GetSearches();
//     }, 500); // Debounce for 500ms
//     return () => clearTimeout(timeoutId);
//   }, [query]);

//   return (
//     <div className="text-white flex relative w-full h-[10vh] items-center justify-start ml-36 p-8">
//       <i className="ri-search-line mr-3 text-xl"></i>
//       <input
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="px-5 py-2 bg-transparent w-[50%] outline-none hover:border-[1px] rounded-lg hover:border-zinc-600"
//         type="text"
//         placeholder="Search Movies"
//       />
//       {query.length > 0 && (
//         <i
//           onClick={() => setQuery("")}
//           className="ri-close-line text-2xl ml-3 cursor-pointer"
//         ></i>
//       )}

//       <div className="bg-zinc-700 absolute max-h-[50vh] top-[85%] overflow-auto rounded-md w-[47%] ml-9">
//         {loading ? (
//           <p className="text-center p-4 text-white">Loading...</p>
//         ) : results.length > 0 ? (
//           results.map((movie, index) => (
//             <div
//               key={index}
//               className="p-3 text-white hover:bg-zinc-600 cursor-pointer"
//             >
//               <h1>{movie.title || "Unknown Title"}</h1>
//               <p className="text-sm text-gray-400">
//                 {movie.year || "Unknown Year"}
//               </p>
//             </div>
//           ))
//         ) : (
//           query.length > 0 && (
//             <p className="text-center p-4 text-gray-400">No results found.</p>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default TopNav;
