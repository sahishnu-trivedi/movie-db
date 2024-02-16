import { useContext, useEffect } from 'react';
import { fetchMovies } from '../../helpers/fetchData';
import MovieSlider from '../../components/MovieSlider';
import Banner from '../Banner/Banner';
import { GlobalContext } from '../../components/context/GlobalContextProvider';

export default function Home() {
    // const {movies, setMovies} = useContext(GlobalContext);
    const {addAllMovies, allMovies} = useContext(GlobalContext);
    

    const resultMovie = async () => {
        fetchMovies().then(res => res.json())
        .then(data => {
            const newResults = data.results.map(movie => ({...movie, addedToFavourites: false}))
            addAllMovies(newResults)
        })
        .catch(err => console.error(err));
    }
    
    useEffect(() => {
        if(allMovies.length === 0) resultMovie();
    }, [])

    return(
        <div>
            {allMovies.length > 0 && 
            <>
                <Banner content={allMovies[0]} />
                <MovieSlider slides={allMovies} />
            </>
            }
      </div>
    )
}