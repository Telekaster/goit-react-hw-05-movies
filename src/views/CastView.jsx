import React from "react";
import Header from "../components/Header/Header";
import Moovie from "../components/Moovie/Moovie";
import Cast from "../components/Cast/Cast";

export default function CastView(params) {
  return (
    <>
      <Header />
      <Moovie />
      <Cast />
    </>
  );
}
