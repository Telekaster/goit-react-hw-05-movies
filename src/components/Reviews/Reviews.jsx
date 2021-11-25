import { React, useState } from "react";
import fetchReviews from "../../services/fetchReviews";

export default function Reviews() {
  const [reviews, setReviews] = useState();
  const id = getID(document.location.pathname);

  fetchReviews(id).then((data) => {
    // console.log(data.results);
    return setReviews(data.results);
  });

  return (
    <ul>
      {!reviews ? (
        <p>Loading...</p>
      ) : (
        reviews.map((review) => {
          console.log(review);
          return (
            <li>
              <p>
                Author: <span>{review.author}</span>
              </p>
              <p>{review.content}</p>
            </li>
          );
        })
      )}
    </ul>
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
