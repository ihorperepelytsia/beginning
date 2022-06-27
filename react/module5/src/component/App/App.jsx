import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "../Nav/Nav";

import HomePage from "../../pages/HomePage";
import MoviesPage from "../../pages/MoviesPage";
import MoviesDetailsPage from "../../pages/MoviesDetailsPage";
import Cast from "../../pages/Cast";
import Reviews from "../../pages/Reviews";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />}>
            <Route path=":movieId" element={<MoviesDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<div>Not pages</div>} />
        </Route>
      </Routes>
      <div></div>
    </>
  );
};

export default App;
