import { React, useState } from "react";
import { fetchSearch } from "../../services/api";
import { Link } from "react-router-dom";

export default function Search() {
  const [searchedMoovies, setSearchedMoovies] = useState();

  function handler(e) {
    const input = document.querySelector("#input");
    fetchSearch(input.value).then((data) => {
      return setSearchedMoovies(data.results);
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

      {searchedMoovies && (
        <div>
          <ul>
            {searchedMoovies.map((item) => {
              return (
                <li>
                  <Link to={{ pathname: `/moovies/${item.id}` }}>
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
