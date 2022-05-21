import React, { useState, useEffect } from 'react';

import './Filters.css';

import { getGenres } from '../../utils/api';

const Filters = ({ movies, setLeakedMovies }) => {
  const [movieCategory, setMovieCategory] = useState('');
  const [filters, setFilters] = useState([]);

  const fetchGenres = async () => {
    const data = await getGenres();
    setFilters(data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    if (movieCategory !== '') {
      const movieFilter = movies.filter((movie) =>
        movie.genre_ids.includes(Number(movieCategory))
      );
      setLeakedMovies(movieFilter);
    } else {
      setLeakedMovies([]);
    }
  }, [movieCategory]);

  return (
    <div className="filters container">
      <h2>Filtrar por :</h2>
      <form className="filters__form">
        <select
          value={movieCategory}
          onChange={(e) => setMovieCategory(e.target.value)}
        >
          <option value="">Genero</option>
          {filters.map((filter) => (
            <option value={filter.id} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Filters;
