import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import Tv from "./components/Tv";
import Peoples from "./components/Peoples";
import MovieDetails from "./components/details/MovieDetails";
import TvDetails from "./components/details/TvDetails";
import PersonDetails from "./components/details/PersonDetails";

const App = () => {
  return (
    <div className="w-screen bg-[#1f1e24] h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />

        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/details/:id" element={<MovieDetails />} />

        <Route path="/tv" element={<Tv />} />
        <Route path="/tv/details/:id" element={<TvDetails />} />

        <Route path="/person" element={<Peoples />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />
      </Routes>
    </div>
  );
};

export default App;
