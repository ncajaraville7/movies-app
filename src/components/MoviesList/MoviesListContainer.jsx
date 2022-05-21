import React, { useState, useEffect } from 'react';

import './MoviesListContainer.css';

import { getMovies } from '../../utils/api';

import Movies from './Movies/Movies';
import Spinner from '../Spinner/Spinner';
import Paginador from '../Paginador/Paginador';
import Filters from '../Filters/Filters';

const MoviesListContainer = () => {
  const [movies, setMovies] = useState([]);
  const [is_loading, setIs_loading] = useState(false);
  const [pages, setPages] = useState(1);
  const [leakedMovies, setLeakedMovies] = useState([]);

  const fetchMovies = async () => {
    setIs_loading(true);
    const data = await getMovies(pages);
    setMovies(data.results);
    setIs_loading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, [pages]);

  return (
    <>
      <Filters movies={movies} setLeakedMovies={setLeakedMovies} />
      <div className="movies-list ">
        {is_loading ? (
          <Spinner />
        ) : leakedMovies.length < 1 ? (
          movies.map((movie) => <Movies key={movie.id} {...movie} />)
        ) : (
          leakedMovies.map((movie) => <Movies key={movie.id} {...movie} />)
        )}
      </div>
      <Paginador pages={pages} setPages={setPages} />
    </>
  );
};

export default MoviesListContainer;
