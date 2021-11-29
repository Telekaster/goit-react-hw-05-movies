import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
const HomeView = lazy(() => import("./views/HomeView"));
const SearchView = lazy(() => import("./views/SearchView"));
const MovieView = lazy(() => import("./views/MovieView"));
const CastView = lazy(() => import("./views/CastView"));
const ReviewsView = lazy(() => import("./views/ReviewsView"));

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" exact element={<HomeView />} />
          <Route path="/search_movie" element={<SearchView />} />
          <Route path="/movies/:id/*" element={<MovieView />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
