export default async function fetchCredits(movie_id) {
  const BASE_URL = "api.themoviedb.org/3";
  const key = "61165aac189ece3ae64e67d82e58db65";
  // https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
  const result = await fetch(
    `https://${BASE_URL}/movie/${movie_id}/reviews?api_key=${key}&language=en-US&page=1`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return result;
}
