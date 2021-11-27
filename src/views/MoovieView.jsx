import React, { lazy, Suspense } from "react";
const Header = lazy(() => import("../components/Header/Header"));
const Moovie = lazy(() => import("../components/Moovie/Moovie"));

export default function MoovieView() {
  return (
    <>
      <Header />
      <Moovie />
    </>
  );
}
