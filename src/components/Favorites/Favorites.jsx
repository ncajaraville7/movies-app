import { useContext } from 'react';

import { FavoritesContext } from '../../context/FavoritesContext';

import './Favorites.css';

const Favorites = () => {
  const context = useContext(FavoritesContext);

  const deleteMovie = (id) => {
    const deleteMovie = context.favorites.filter((movie) => movie.id !== id);
    context.setFavorites(deleteMovie);
  };

  return (
    <div className="favorites">
      {context.favorites.length > 0 ? (
        context.favorites.map((movie) => (
          <div className="favorites-content" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.img}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <button onClick={() => deleteMovie(movie.id)}>Eliminar</button>
          </div>
        ))
      ) : (
        <h2>No hay peliculas agregadas en favoritos</h2>
      )}
    </div>
  );
};

export default Favorites;
