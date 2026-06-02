
const API_KEY = "20ec589ec9341b676d3da17e49a38fe0";
const DB_URL = "https://api.themoviedb.org/3";
const POSTER_URL = "`https://image.tmdb.org/t/p/w500";

export async function getMovies() {
  const response = await fetch(`${DB_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();

  return data.results;
}

export async function searchMovie(searchText) {
  const response = await fetch(`${DB_URL}/search/movie?api_key=${API_KEY}&query=${encodeURI(searchText)}`);
  const data = await response.json();

  return data.results;
}