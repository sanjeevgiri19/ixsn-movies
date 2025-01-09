import axios from "axios";

const instance = axios.create({
  // method: "GET",
  baseURL: "https://api.themoviedb.org/3/",
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjUzN2I1OTcyMjhiOWU2YzJjOWFlZjk5MzVjYzkzMCIsIm5iZiI6MTczNjMyNDQ4Mi45MzcsInN1YiI6IjY3N2UzNTgyYjExZDA4ODExMTdiMDZhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5QTeAXCmpu5DeI0rDG0cjCfKlz3Wuf5roRG-g1sg_b8",
  },
});
 
export default instance;