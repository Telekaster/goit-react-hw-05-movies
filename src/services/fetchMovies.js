export default async function fetchMovies(typeOfRequest, options = "") {
  //   https://api.themoviedb.org/3/movie/550?api_key=61165aac189ece3ae64e67d82e58db65
  //   https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
  const BASE_URL = "api.themoviedb.org/3";
  const key = "61165aac189ece3ae64e67d82e58db65";

  const result = await fetch(
    `https://${BASE_URL}/${typeOfRequest.current}?api_key=${key}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return result;
}
