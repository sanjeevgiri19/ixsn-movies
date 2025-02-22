import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/mainPages/Home";
import Trending from "./components/mainPages/Trending";
import Popular from "./components/mainPages/Popular";
import Movies from "./components/mainPages/Movies";
import Tv from "./components/mainPages/Tv";
import Peoples from "./components/mainPages/Peoples";
import MovieDetails from "./components/details/MovieDetails";
import TvDetails from "./components/details/TvDetails";
import PersonDetails from "./components/details/PersonDetails";
import Trailer from "./components/mainPages/Trailer";

import SketchCanvas from "./components/things/SketchCanvas";
import GetMovieRecommendatios from "./components/things/GetMovieRecommendatios";
import ContactPage from "./components/pages/ContactPage";
import AboutPage from "./components/pages/AboutPage";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <div className="w-screen  bg-[#1f1e24] h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />

        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movie/details/:id" element={<MovieDetails />} />
        <Route path="/movie/details/:id/trailer" element={<Trailer />} /> */}

        <Route path="/movie/details/:id" element={<MovieDetails />}>
          <Route path="trailer" element={<Trailer />} />
        </Route>

        <Route path="/tv" element={<Tv />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="trailer" element={<Trailer />} />
        </Route>

        <Route path="/person" element={<Peoples />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/recommendations" element={<GetMovieRecommendatios />} />
        <Route path="/canvas" element={<SketchCanvas />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
