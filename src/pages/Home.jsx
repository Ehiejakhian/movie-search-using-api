import MovieCard from "../components/MovieCard.jsx";
import "../scss/pages/Home.scss";
import "../scss/components/MovieGrid.scss";
import { getMovies, searchMovie } from "../services/api.js";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import{useContext} from "react";
import { MovieContext } from "../context/MovieContext.jsx";


export default function Home() {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { query } = useContext(MovieContext);

  useEffect(() => {
    const queryMovies = async () => {
      try {
        const queriedMovies = query.trim()
          ? await searchMovie(query)
          : await getMovies();
        setMovies(queriedMovies);
      } catch (err) {
        console.error(err);
        setError("Movie search failed...");
      } finally {
        setLoading(false);
      }
    }

    queryMovies();
  }, [query])

  useEffect(()=> {
    const loadNewMovies = async () => {
      try {
        const newMovies = await getMovies();
        setMovies(newMovies);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadNewMovies();
  }, [])


  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const newMovies = await getMovies();
      setMovies(newMovies);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to load movies...");
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Home - Movie App</title>
      </Helmet>

      <div className="home-page">
        <div className="movie-grid">
          {error && <div className="error">{error}</div>}
          
          {loading ? (
            <div className="loading">Loading movies...</div>
          ) : (
            movies?.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
