import { useEffect, useState } from 'react';
import './App.css';
import Banner from './pages/Banner';
import Header from './pages/Header';

import MovieSlider from './components/MovieSlider';
import {fetchMovies} from './components/FetchData';


function App() {
  const [movies, setMovies] = useState([]);

  const resultMovie = async () => {
    return await fetchMovies().then(res => res.json())
    .then(movie => setMovies(movie.results))
    .catch(err => console.error(err));
  }

  useEffect(() => {
    resultMovie();
  }, [])

  return (
    <div>
      <header>
        <Header />
      </header>
      
      <Banner content={movies} />

      {movies && movies.length > 0 && <MovieSlider slides={movies} />}
      
    </div>
  );
}

export default App;
