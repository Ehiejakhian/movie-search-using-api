import '../scss/pages/Favourites.scss';
import '../scss/components/MovieGrid.scss';
import MovieCard from '../components/MovieCard.jsx';

import {useContext} from "react";
import { MovieContext } from "../context/MovieContext.jsx";
import { useState } from "react";

export default function Fav() {
  const [favMovies, setFavMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  return (
    <div className="favourites">
      <h1>Favourites</h1>
      
      {error && <p className="error">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-grid">
          {favMovies.length === 0 ? (
              <p>No favourite movies found.</p>
            ) : (
              favMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))
            )}
        </div>
      )}
    </div>
  )
}