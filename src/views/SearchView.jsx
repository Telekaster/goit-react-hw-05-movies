import React, { lazy, Suspense } from "react";
const Header = lazy(() => import("../components/Header/Header"));
const Search = lazy(() => import("../components/Search/Search"));

export default function SearchView() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Search />
    </Suspense>
  );
}
