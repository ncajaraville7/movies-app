export const getMovies = async (page = 1) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=f4f4b5ba6583c3e2b6909ce98185ebca&language=es-ES&page=${page}`
  );
  const data = await response.json();
  return data;
};

export const getSearchMovie = async (movie) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=f4f4b5ba6583c3e2b6909ce98185ebca&language=es-ES&query=${movie}`
  );
  const data = await response.json();
  return data;
};

export const getDetails = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=f4f4b5ba6583c3e2b6909ce98185ebca&language=es-ES`
  );
  const data = response.json();
  return data;
};

export const getGenres = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=f4f4b5ba6583c3e2b6909ce98185ebca&language=es-ES'
  );
  const data = await response.json();
  return data;
};
