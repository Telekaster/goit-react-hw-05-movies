import React from "react";
import Header from "../components/Header/Header";
import Trending from "../components/Trending/Trending";

// const idHandler = (evt) => {
//   console.log("Hello");
// };

export default function HomeView() {
  return (
    <>
      <Header />
      <Trending
      // onClick={idHandler}
      />
    </>
  );
}
