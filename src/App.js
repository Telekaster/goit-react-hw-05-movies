import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const HomeView = lazy(() => import("./views/HomeView"));
// import HomeView from "./views/HomeView";
const SearchView = lazy(() => import("./views/SearchView"));
// import SearchView from "./views/SearchView";
const MoovieView = lazy(() => import("./views/MoovieView"));
// import MoovieView from "./views/MoovieView";
const CastView = lazy(() => import("./views/CastView"));
// import CastView from "./views/CastView";
const ReviewsView = lazy(() => import("./views/ReviewsView"));
// import ReviewsView from "./views/ReviewsView";

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
