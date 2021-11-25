export default async function fetchCredits(keyword) {
  const BASE_URL = "api.themoviedb.org/3";
  const key = "61165aac189ece3ae64e67d82e58db65";
  const result = await fetch(
    `https://${BASE_URL}/search/movie/?query=${keyword}&api_key=${key}&language=en-US&page=1&include_adult=false`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return result;
}
