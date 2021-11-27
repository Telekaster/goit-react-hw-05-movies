import React, { lazy, Suspense } from "react";
const Header = lazy(() => import("../components/Header/Header"));
const Moovie = lazy(() => import("../components/Moovie/Moovie"));
const Cast = lazy(() => import("../components/Cast/Cast"));

export default function CastView(params) {
  return (
    <>
      <Header />
      <Moovie />
      <Cast />
    </>
  );
}
