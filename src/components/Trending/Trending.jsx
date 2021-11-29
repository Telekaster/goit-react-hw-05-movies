import { React, useState, useRef, useEffect, useParams } from "react";
import PropTypes from "prop-types";
import { fetchMovies } from "../../services/api";
import { Link } from "react-router-dom";
// import idHandler from "../../views/HomeView";

export default function Trending() {
  const [movies, setMovies] = useState();
  const trending = useRef("trending/all/day");

  useEffect(() => {
    fetchMovies(trending).then((data) => {
      setMovies(data.results);
    });
  });

  return (
    <>
      <h1>Trending today</h1>
      {!movies ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {movies.map((item) => (
            <li>
              <Link to={{ pathname: `/movies/${item.id}` }}>
                {item.name || item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

Trending.propTypes = {
  data: PropTypes.object,
};
