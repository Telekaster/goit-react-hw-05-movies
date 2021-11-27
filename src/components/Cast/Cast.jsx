import { React, useState, useEffect } from "react";
import { fetchCredits } from "../../services/api";

export default function Cast() {
  const [cast, setCast] = useState();
  const id = getID(document.location.pathname);

  useEffect(() => {
    fetchCredits(id).then((data) => {
      setCast(data.cast);
    });
  });

  return (
    <>
      <div>
        {!cast ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {cast.map((actor) => {
              return (
                <li>
                  <p>{actor.name}</p>
                  <img
                    src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
                    alt=""
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
      ;
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
