import React, { useState } from 'react';

import './SearchMovie.css';
import '../MoviesList/MoviesListContainer.css';

import { getSearchMovie } from '../../utils/api';

import { FaSearch } from 'react-icons/fa';
import Movies from '../MoviesList/Movies/Movies';

const SearchMovie = () => {
  const [searchMovieValue, setSearchMovieValue] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getSearchMovie(searchMovieValue);
    setSearchMovies(data.results);
  };
  return (
    <>
      <div className="search">
        <form className="search__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Busca una pelicula"
            value={searchMovieValue}
            onChange={(e) => setSearchMovieValue(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      {searchMovies && (
        <div className="movies-list">
          {searchMovies.length >= 1 ? (
            searchMovies.map((movies) => <Movies key={movies.id} {...movies} />)
          ) : (
            <h2>No hay resultados</h2>
          )}
        </div>
      )}
    </>
  );
};

export default SearchMovie;
