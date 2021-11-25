export default async function fetchMovies(typeOfRequest) {
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
