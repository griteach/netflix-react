const API_KEY = "8cea7307bfbffe23aa9a52daee2503c0";
const BASE_PATH = "https://api.themoviedb.org/3";
const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
