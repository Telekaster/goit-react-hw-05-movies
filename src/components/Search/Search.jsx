import { React, useState } from "react";
import { fetchSearch } from "../../services/api";
import { Link } from "react-router-dom";

export default function Search() {
  const [searchedMovies, setSearchedMovies] = useState();

  function handler(e) {
    const input = document.querySelector("#input");
    fetchSearch(input.value).then((data) => {
      return setSearchedMovies(data.results);
    });
  }

  return (
    <>
      <div>
        <input type="text" id="input" />
        <button type="button" onClick={handler}>
          Search
        </button>
      </div>

      {searchedMovies && (
        <div>
          <ul>
            {searchedMovies.map((item) => {
              return (
                <li>
                  <Link to={{ pathname: `/movies/${item.id}` }}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
