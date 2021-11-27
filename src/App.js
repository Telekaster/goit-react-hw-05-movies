import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const HomeView = lazy(() => import("./views/HomeView"));
const SearchView = lazy(() => import("./views/SearchView"));
const MoovieView = lazy(() => import("./views/MoovieView"));
const CastView = lazy(() => import("./views/CastView"));
const ReviewsView = lazy(() => import("./views/ReviewsView"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" exact element={<HomeView />} />
        <Route path="/search_movie" element={<SearchView />} />
        <Route path="/moovies/:id" element={<MoovieView />} />
        <Route path="/moovies/:id/cast" element={<CastView />} />
        <Route path="/moovies/:id/reviews" element={<ReviewsView />} />
      </Routes>
    </Suspense>
  );
}

export default App;
