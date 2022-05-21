import { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getLocalStorage = () => {
      const movieLocalStorage =
        JSON.parse(localStorage.getItem('moviesFavorite')) || [];
      setFavorites(movieLocalStorage);
    };
    getLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem('moviesFavorite', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
