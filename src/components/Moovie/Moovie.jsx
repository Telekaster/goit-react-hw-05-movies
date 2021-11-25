import { React, useState, useEffect, useRef } from "react";
import fetchMovies from "../../services/fetchMovies";

export default function Moovie(params) {
  const [currentMoovie, setCurrentMoovie] = useState();

  const urlString = document.location.pathname;
  const path = useRef(`movie/${getID(urlString)}`);

  function getID(string) {
    let id = "";
    for (const item of urlString) {
      if (!isNaN(Number(item))) {
        id = id + item;
      }
    }
    return Number(id);
  }

  useEffect(() => {
    fetchMovies(path).then((data) => {
      setCurrentMoovie(data);
    });
  });

  // console.log(currentMoovie.budget);

  return (
    <>
      <button type="button">Go Back</button>
      {!currentMoovie ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img
            src={currentMoovie.poster_path}
            alt={currentMoovie.title || currentMoovie.name}
          />
          <div>
            <h2>
              {currentMoovie.title || currentMoovie.name}
              <span>({currentMoovie.release_date.slice(0, 4)})</span>
            </h2>
            <p>
              User Score: <span>{currentMoovie.vote_average * 10}%</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
