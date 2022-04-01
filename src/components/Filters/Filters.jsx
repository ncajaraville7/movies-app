import React, { useState, useEffect } from 'react';

import './Filters.css';

import { getGenres } from '../../utils/api';

const Filters = ({ movies, setMovies }) => {
  const [filter, setFilter] = useState('');
  const [filters, setFilters] = useState([]);

  const fetchGenres = async () => {
    const data = await getGenres();
    setFilters(data.genres);
    // console.log(data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    if (filter) {
      const movieFilter = movies.filter(
        (movie) => movie.genre_ids.id === filter
      );
      console.log(movieFilter);
      //   setMovies(movieFilter);
    }
  }, [filter]);

  return (
    <div className="filters container">
      <h2>Filtrar por :</h2>
      <form className="filters__form">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">Genero</option>
          {filters.map((filter) => (
            <option value={filter.id} key={filter.name}>
              {filter.name}
            </option>
          ))}
        </select>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">Mas actual</option>
          <option value="">Mas antigua</option>
        </select>
      </form>
    </div>
  );
};

export default Filters;
