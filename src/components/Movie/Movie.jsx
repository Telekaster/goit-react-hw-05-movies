import { React, useState, useEffect, useRef, lazy, Suspense } from "react";
import { NavLink, useNavigate, Routes, Route } from "react-router-dom";
import { fetchMovies } from "../../services/api";
import style from "./Movie.module.css";

const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

export default function Movie() {
  const [currentMovie, setCurrentmovie] = useState();
  const urlString = document.location.pathname;
  const path = useRef(`movie/${getID(urlString)}`);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies(path).then((data) => {
      setCurrentmovie(data);
    });
  });

  return (
    <>
      <div className={style.content}>
        <button
          type="button"
          className={style.back_btn}
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </button>

        {!currentMovie ? (
          <p>Loading...</p>
        ) : (
          <div className={style.movie_section}>
            <img
              src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${currentMovie.poster_path}`}
              alt={currentMovie.title || currentMovie.name}
              className={style.image}
            />

            <div>
              <h2 className={style.description}>
                {currentMovie.title || currentMovie.name}
                <span>
                  (
                  {currentMovie.release_date &&
                    currentMovie.release_date.slice(0, 4)}
                  )
                </span>
              </h2>
              <p className={style.description}>
                User Score: <span>{currentMovie.vote_average * 10}%</span>
              </p>
              <h3 className={style.description}>Overview:</h3>
              <p className={style.description}>{currentMovie.overview}</p>
              <h3>Genres:</h3>
              <p className={style.description}>
                {currentMovie.genres &&
                  currentMovie.genres.map((genre) => {
                    return `${genre.name}, `;
                  })}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className={style.additional}>
        <h3>Additional information:</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Review</NavLink>
          </li>
        </ul>
      </div>
      ;
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
}

function getID(string) {
  let id = "";
  for (const item of string) {
    if (!isNaN(Number(item))) {
      id = id + item;
    }
  }
  return Number(id);
}
