import axios from "axios";

// const instance = axios.create({
//   // method: "GET",
//   baseURL: "https://api.themoviedb.org/3/",
//   method: "GET",z
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjUzN2I1OTcyMjhiOWU2YzJjOWFlZjk5MzVjYzkzMCIsIm5iZiI6MTczNjMyNDQ4Mi45MzcsInN1YiI6IjY3N2UzNTgyYjExZDA4ODExMTdiMDZhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5QTeAXCmpu5DeI0rDG0cjCfKlz3Wuf5roRG-g1sg_b8",
//   },
// });
 
// export default instance;


// // TMDB Axios instance
// const instance = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
//   headers: {
//     accept: "application/json",
//     Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
//   },
// });



// // Gemini Axios instance
// const geminiInstance = axios.create({
//   baseURL: import.meta.env.VITE_GEMINI_API_BASE_URL, // Add this to your .env file
//   headers: {
//     accept: "application/json",
//     Authorization: `Bearer ${import.meta.env.VITE_GEMINI_API_KEY}`, // Add this to your .env file
//   },
// });

// export  { instance, geminiInstance };


// Before deployment, move API keys to environment variables
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
});

export default instance;