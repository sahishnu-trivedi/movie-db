import { useEffect, useState } from 'react';
import './App.css';
import Banner from './pages/Banner';
import Header from './pages/Header';

function App() {
  const [movies, setMovies] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTFiMDZjZDQ2ZWFiYmYwZGFlMTA3ZDRmN2Q0NTE5ZSIsInN1YiI6IjY1YWE1NWMzOGQ1MmM5MDEzNzgxZGQyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nEuvsBbYJCezSz-NsVOhnmPGXxKswUuc2U6R12VioE'
    }
};

const fetchMovies = async () => {
    const movieListFetch = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(res => res.json())
    .then(movie => console.log(movie))
    .catch(err => console.error(err));

}

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <div>
      <header>
        <Header />
      </header>
      <Banner />
    </div>
  );
}

export default App;
