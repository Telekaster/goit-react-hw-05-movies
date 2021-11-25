import React, { lazy, Suspense } from "react";
const Header = lazy(() => import("../components/Header/Header"));
const Trending = lazy(() => import("../components/Trending/Trending"));

export default function HomeView() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Trending />
    </Suspense>
  );
}
