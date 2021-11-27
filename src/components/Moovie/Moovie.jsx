import { React, useState, useEffect, useRef, lazy, Suspense } from "react";
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import { fetchMovies } from "../../services/api";
import style from "./Moovie.module.css";

// const CastView = lazy(() => import("../../views/CastView"));
// const ReviewsView = lazy(() => import("../../views/ReviewsView"));

export default function Moovie() {
  const [currentMoovie, setCurrentMoovie] = useState();
  const urlString = document.location.pathname;
  const path = useRef(`movie/${getID(urlString)}`);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies(path).then((data) => {
      setCurrentMoovie(data);
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

        {!currentMoovie ? (
          <p>Loading...</p>
        ) : (
          <div className={style.moovie_section}>
            <img
              src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${currentMoovie.poster_path}`}
              alt={currentMoovie.title || currentMoovie.name}
              className={style.image}
            />

            <div>
              <h2 className={style.description}>
                {currentMoovie.title || currentMoovie.name}
                <span>
                  (
                  {currentMoovie.release_date &&
                    currentMoovie.release_date.slice(0, 4)}
                  )
                </span>
              </h2>
              <p className={style.description}>
                User Score: <span>{currentMoovie.vote_average * 10}%</span>
              </p>
              <h3 className={style.description}>Overview:</h3>
              <p className={style.description}>{currentMoovie.overview}</p>
              <h3>Genres:</h3>
              <p className={style.description}>
                {currentMoovie.genres &&
                  currentMoovie.genres.map((genre) => {
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
            <Link to={`/moovies/${getID(urlString)}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/moovies/${getID(urlString)}/reviews`}>Previews</Link>{" "}
          </li>
        </ul>
      </div>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/moovies/:id/cast" element={<CastView />} />
          <Route path="/moovies/:id/reviews" element={<ReviewsView />} />
        </Routes>
      </Suspense> */}
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
