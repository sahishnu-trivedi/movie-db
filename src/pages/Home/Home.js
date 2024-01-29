import { useEffect, useState } from 'react';
import MovieSlider from '../../components/MovieSlider';
import {fetchMovies} from '../../components/FetchData';
import Banner from '../Banner/Banner';

export default function Home() {
    const [movies, setMovies] = useState([]);

    const resultMovie = async () => {
        return await fetchMovies().then(res => res.json())
        .then(movie => setMovies(movie.results))
        .catch(err => console.error(err));
    }

    useEffect(() => {
        resultMovie();
    }, [])
    return(
        <div>
            {movies && movies.length > 0 && <Banner content={movies} />}
            {movies && movies.length > 0 && <MovieSlider slides={movies} />}
      </div>
    )
}