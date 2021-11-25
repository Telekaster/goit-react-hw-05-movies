import React, { lazy, Suspense } from "react";
const Header = lazy(() => import("../components/Header/Header"));
const Moovie = lazy(() => import("../components/Moovie/Moovie"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));

export default function ReviewsView() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Moovie />
      <Reviews />
    </Suspense>
  );
}
