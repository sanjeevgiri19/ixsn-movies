import React from 'react'

const GetMovieRecommendatios = () => {
  return (
    <div className='text-zinc-300 flex justify-center items-center w-screen h-screen text-2xl'>WILL BE AVAILABLE SOON.....</div>
  )
}

export default GetMovieRecommendatios









// import { useState } from "react";
// import { getMovieRecommendations } from "../../utils/geminiApi";
// // import { getMovieRecommendations } from "../utils/geminiApi";

// function MovieRecommendations() {
//   const [recommendations, setRecommendations] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleGetRecommendations = async () => {
//     setLoading(true);
//     try {
//       const userPreferences =
//         "I enjoy sci-fi movies with philosophical themes, similar to Inception and Blade Runner. I prefer movies made after 2000 with good visual effects.";
//       const results = await getMovieRecommendations(userPreferences);
//       setRecommendations(results);
//     } catch (error) {
//       console.error("Failed to get recommendations:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleGetRecommendations} disabled={loading}>
//         {loading ? "Getting Recommendations..." : "Get Movie Recommendations"}
//       </button>

//       {recommendations.length > 0 && (
//         <div>
//           <h2>Recommended Movies:</h2>
//           {recommendations.map((movie, index) => (
//             <div key={index}>
//               <h3>
//                 {movie.title} ({movie.year})
//               </h3>
//               <p>{movie.reason}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default MovieRecommendations;
