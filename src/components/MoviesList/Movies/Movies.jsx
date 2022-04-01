import React from 'react';
import { Link } from 'react-router-dom';

import './Movies.css';

const Movies = ({ poster_path, title, id }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="movie">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      </div>
    </Link>
  );
};

export default Movies;
