import MovieCard from "../components/MovieCard.jsx";
import "../scss/pages/Home.scss";
import "../scss/components/MovieGrid.scss";
import { getMovies } from "../services/api.js";
import { useState, useEffect } from "react";


export default function Home() {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
  );
}
