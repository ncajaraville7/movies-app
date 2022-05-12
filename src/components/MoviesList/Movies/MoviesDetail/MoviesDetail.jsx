import React, { useState, useEffect } from 'react';

import './MoviesDetail.css';

import { getDetails } from '../../../../utils/api';
import { useParams } from 'react-router-dom';
import Detail from './Detail';
import Spinner from '../../../Spinner/Spinner';

const MoviesDetail = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  const fetchMoviesDetails = async () => {
    try {
      setIsLoading(true);
      const data = await getDetails(movieId);
      setMovieDetail(data);
      setIsLoading(false);
      console.log(movieDetail);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleClick = () => {
  //   const movieFavorite = {
  //     id: movieDetail.id,
  //     title: movieDetail.title,
  //     img: movieDetail.poster_path,
  //   };

  //   console.log(movieFavorite);
  // };

  useEffect(() => {
    fetchMoviesDetails();
  }, [movieId]);

  return (
    <div>
      <p>aca van los detalles</p>
    </div>
  );
};

export default MoviesDetail;
