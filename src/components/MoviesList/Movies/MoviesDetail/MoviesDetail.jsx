import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import './MoviesDetail.css';

import { getDetails } from '../../../../utils/api';

import { FavoritesContext } from '../../../../context/FavoritesContext';

import Spinner from '../../../Spinner/Spinner';
import Error from '../../../Alerts/Error';
import Success from '../../../Alerts/Success';

const MoviesDetail = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { movieId } = useParams();

  const context = useContext(FavoritesContext);

  const fetchMoviesDetails = async () => {
    try {
      setIsLoading(true);
      const data = await getDetails(movieId);
      setMovieDetail(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    const movieFavorite = {
      id: movieDetail.id,
      title: movieDetail.title,
      img: movieDetail.poster_path,
    };

    /* Checking if the movie is already in the favorites list. */
    const movieRepeated = context.favorites.find(
      (movie) => movie.id === movieFavorite.id
    );

    if (!movieRepeated) {
      context.setFavorites([...context.favorites, movieFavorite]);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  useEffect(() => {
    fetchMoviesDetails();
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="movie-detail container">
          <div className="movie-detail__image">
            {movieDetail.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
                alt={movieDetail.title}
              />
            )}
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
            {error && <Error>La pelicula ya se encuentra en favoritos</Error>}
            {success && <Success>Pelicula agregada a favoritos</Success>}
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesDetail;
