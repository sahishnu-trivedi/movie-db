import React, { useContext } from 'react'
import Buttons from '../Buttons'
import { GlobalContext } from '../context/GlobalContextProvider'

function MovieSliderCard({ sliderCard }) {
    console.log('slideCards : ', sliderCard);
    const {addMovieToFavourites, favourites} = useContext(GlobalContext);
    // console.log('favourites: ', favourites);

  return (
    <div>
        <div key={sliderCard.id}>
            <img className='transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0' src={`https://image.tmdb.org/t/p/w500/${sliderCard.poster_path}`} alt={sliderCard.original_title} />
            <h4>{sliderCard.title}</h4>
        </div>
        <div className='mt-3'>
            {
              sliderCard.addedToFavourites ? 
              <Buttons name='Added' bkgColor='#00f' color='#fff'/> :
              <Buttons name='Add to Favourites' bkgColor='#f00' color='#fff' onClick={() => addMovieToFavourites(sliderCard)}/> 
            }
        </div>
    </div>
  );
}

export default MovieSliderCard;