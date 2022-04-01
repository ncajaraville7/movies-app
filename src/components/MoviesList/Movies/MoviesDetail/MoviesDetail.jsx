import React, { useState, useEffect } from 'react';

import './MoviesDetail.css';

import { getDetails } from '../../../../utils/api';
import { useParams } from 'react-router-dom';

const MoviesDetail = () => {
  const { movieId } = useParams();

  const [movieDetail, setMovieDetail] = useState([]);

  const fetchMoviesDetails = async () => {
    const data = await getDetails(movieId);
    setMovieDetail(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchMoviesDetails();
  }, []);

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
      </div>
    </div>
  );
};

export default MoviesDetail;
