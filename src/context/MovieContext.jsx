import { createContext, useState } from "react";

export const MovieContext = createContext();

export function MovieProvider({children}) {
  const [query, setQuery] = useState("");
  const [favs, setFavs] = useState([]);

  const addFav = (newFav) => {
    setFavs(prev => [...prev, newFav]);
  };
  const removeFav = (oldfav) => {
    setFavs(prev => 
      prev.filter((each) => each.id === oldfav.id)
    );
  };

  return <MovieContext.Provider value = {{ query, setQuery, favs, addFav, removeFav }}>
    { children }
  </MovieContext.Provider>
}