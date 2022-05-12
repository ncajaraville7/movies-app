import React from 'react';

import './MoviesDetail.css';

const Detail = ({ movieDetail }) => {
  const { poster_path, title, vote_average, overview, genres } = movieDetail;
  return (
    <div className="movie-detail container">
      <div className="movie-detail__image">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
          alt={movieDetail.title}
        />
      </div>
      <div className="movie-detail__content">
        <div className="movie-detail__content__title">
          <h2>{movieDetail.title}</h2>
          <p>{movieDetail.vote_average}</p>
        </div>
        <p>{movieDetail.overview}</p>
        <div className="movie-detail__content__genres">
          {movieDetail.genres !== undefined &&
            movieDetail.genres.map((item) => (
              <p key={item.name}>{item.name}</p>
            ))}
        </div>
        <button className="btn-favorite" onClick={handleClick}>
          Agregar Favoritos
        </button>
      </div>
    </div>
  );
};

export default Detail;
