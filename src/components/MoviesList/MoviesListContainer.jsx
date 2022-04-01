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

  const fetchMovies = async () => {
    setIs_loading(true);
    const data = await getMovies(pages);
    setMovies(data.results);
    // console.log(data.results[0].genre_ids);
    setIs_loading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, [pages]);

  return (
    <>
      <Filters movies={movies} setMovies={setMovies} />
      <div className="movies-list ">
        {is_loading ? (
          <Spinner />
        ) : (
          movies.map((movie) => <Movies key={movie.id} {...movie} />)
        )}
      </div>
      <Paginador pages={pages} setPages={setPages} />
    </>
  );
};

export default MoviesListContainer;
