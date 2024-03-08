import React, { useContext } from 'react'
import Buttons from '../Buttons'
import { GlobalContext } from '../context/GlobalContextProvider'
import { Link } from 'react-router-dom';

function MovieSliderCard({ sliderCard }) {
    console.log('slideCards : ', sliderCard);
    const {addMovieToFavourites, removeMovieFromFavourites, favourites} = useContext(GlobalContext);
    const createMovieSlug = (movie) => movie.title.replaceAll(' ', '-').toLowerCase()

    const addedMovieId = favourites.filter(movie => (movie.id == sliderCard.id))
    const isMovieFavourite = addedMovieId.length > 0 ? addedMovieId[0].addedToFavourites : false;
    const ratingDigit = Math.round(sliderCard.vote_average);
    // console.log('addedMovieId : ', isMovieFavourite);

  return (
    <div>
      <Link to={{
        pathname: `/moviedetail/${createMovieSlug(sliderCard)}`,
        search: `id=${sliderCard.id}`,
      }}>
      <div key={sliderCard.id}>
        <img className='transition-all duration-300 rounded-lg cursor-pointer filter grayscale-0 hover:grayscale' src={`https://image.tmdb.org/t/p/w500/${sliderCard.poster_path}`} alt={sliderCard.original_title} />
        <div className='flex items-center rating-block mt-1'>
          <ion-icon name="star-outline"></ion-icon>
          <p className='mb-0 ml-1 font-normal text-sm text-gray'> {ratingDigit}/10</p>
        </div>
        <h4 className='text-md font-semibold uppercase'>{sliderCard.title}</h4>
        <p className='mb-0 text-sm text-gray'>{sliderCard.overview}</p>
      </div>
      </Link>
        <div className='mt-2'>
          {
            isMovieFavourite ? 
            <Buttons name='Remove' onClick={() => removeMovieFromFavourites(sliderCard)} /> :
            <Buttons applyClass='red-btn' name='Add to Favourites' onClick={() => addMovieToFavourites(sliderCard)}/>
          }
        </div>
    </div>
  );
}

export default MovieSliderCard;