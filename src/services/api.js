const BASE_URL = "https://api.themoviedb.org/3";
const key = "61165aac189ece3ae64e67d82e58db65";

export async function fetchSearch(keyword) {
  const result = await fetch(
    `${BASE_URL}/search/movie/?query=${keyword}&api_key=${key}&language=en-US&page=1&include_adult=false`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return result;
}

export async function fetchMovies(typeOfRequest) {
  const result = await fetch(
    `${BASE_URL}/${typeOfRequest.current}?api_key=${key}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return result;
}

export async function fetchReviews(movie_id) {
  const result = await fetch(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${key}&language=en-US&page=1`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return result;
}

export async function fetchCredits(movie_id) {
  const result = await fetch(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${key}&language=en-US`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return result;
}
