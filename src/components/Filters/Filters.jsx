import React, { useState, useEffect } from 'react';

import './Filters.css';

import { getGenres } from '../../utils/api';

const Filters = ({ movies, setMovies }) => {
  const [filter, setFilter] = useState(0);
  const [filters, setFilters] = useState([]);

  const fetchGenres = async () => {
    const data = await getGenres();
    setFilters(data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    if (filter) {
      const movieFilter = movies.filter(
        (movie) => movie.genre_ids[1] === Number(filter)
      );
      console.log(movieFilter);
      setMovies(movieFilter);
    }
  }, [filter]);

  return (
    <div className="filters container">
      <h2>Filtrar por :</h2>
      <form className="filters__form">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>Genero</option>
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
