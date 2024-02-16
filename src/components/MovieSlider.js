// Import Swiper React components
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieSliderCard from './MovieSliderCard/MovieSliderCard';

const createMovieSlug = (movie) => movie.title.replaceAll(' ', '-').toLowerCase()

function MovieSlider({ slides }) {
    // {`/moviedetail/${slide.title.replaceAll(' ', '-').toLowerCase()}` + '_' + 'id:' + `search: ${slide.id}`}

    return (
        <div className='container mx-auto'>
            <h3 className='my-4 text-3xl font-bold dark:text-white'>Top 50</h3>
           <Swiper
                spaceBetween={20}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {/* <SwiperSlide>
                    <Link to={{
                        // pathname: `/moviedetail/${createMovieSlug(slides)}`,
                        search: `id=${slides.id}`,
                    }}>
                        <MovieSliderCard sliderCard={slides} />
                    </Link>
                    <div className='mt-3'>
                        <Buttons name='Add to Favourites' bkgColor='#f00' color='#fff' onClick={() => addMovieToFavourites(slides)}/>
                    </div>
                </SwiperSlide> */}
                {slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <Link to={{
                            pathname: `/moviedetail/${createMovieSlug(slide)}`,
                            search: `id=${slide.id}`,
                        }}>
                            <MovieSliderCard sliderCard={slide} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MovieSlider;