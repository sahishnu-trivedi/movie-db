import React, { useContext } from 'react'
import Buttons from '../Buttons'
import { GlobalContext } from '../context/GlobalContextProvider'
import { Link } from 'react-router-dom';

function MovieSliderCard({ sliderCard }) {
    // console.log('slideCards : ', sliderCard);
    const {addMovieToFavourites, removeMovieFromFavourites, favourites} = useContext(GlobalContext);
    const createMovieSlug = (movie) => movie.title.replaceAll(' ', '-').toLowerCase()

    const addedMovieId = favourites.filter(movie => (movie.id == sliderCard.id))
    const isMovieFavourite = addedMovieId.length > 0 ? addedMovieId[0].addedToFavourites : false;
    console.log('addedMovieId : ', isMovieFavourite);

  return (
    <div>
      <Link to={{
        pathname: `/moviedetail/${createMovieSlug(sliderCard)}`,
        search: `id=${sliderCard.id}`,
      }}>
      <div key={sliderCard.id}>
        <img className='transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0' src={`https://image.tmdb.org/t/p/w500/${sliderCard.poster_path}`} alt={sliderCard.original_title} />
        <h4>{sliderCard.title}</h4>
      </div>
      </Link>
        <div className='mt-3'>
          {
            isMovieFavourite ? 
            <Buttons name='Remove' bkgColor='#00f' color='#fff' onClick={() => removeMovieFromFavourites(sliderCard)} /> :
            <Buttons name='Add to Favourites' bkgColor='#f00' color='#fff' onClick={() => addMovieToFavourites(sliderCard)}/>
          }
        </div>
    </div>
  );
}

export default MovieSliderCard;