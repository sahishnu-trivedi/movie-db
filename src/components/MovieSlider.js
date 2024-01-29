// Import Swiper React components
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Buttons from './Buttons';

function MovieSlider({ slides }) {
    return (
        <div className='container mx-auto'>
            <h3 className='my-4 text-3xl font-bold dark:text-white'>Top 50</h3>
           <Swiper
                spaceBetween={20}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <Link to='/moviedetail'>
                            <img className='transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0' src={`https://image.tmdb.org/t/p/w500/${slide.poster_path}`} alt={slide.original_title} />
                            <div className='mt-3'>
                                <Buttons name='Add to Favourites' bkgColor='#f00' color='#fff' />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MovieSlider;