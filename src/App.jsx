import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import MoviesListContainer from './components/MoviesList/MoviesListContainer';
import SearchMovie from './components/Search/SearchMovie';
import MoviesDetail from './components/MoviesList/Movies/MoviesDetail/MoviesDetail';
import FavoritesContextProvider from './context/FavoritesContext';
import Favorites from './components/Favorites/Favorites';

function App() {
  return (
    <FavoritesContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MoviesListContainer />} />
          <Route path="/searchMovie" element={<SearchMovie />} />
          <Route path="/movie/:movieId" element={<MoviesDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </FavoritesContextProvider>
  );
}

export default App;
