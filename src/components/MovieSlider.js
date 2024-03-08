// Import Swiper React components
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieSliderCard from './MovieSliderCard/MovieSliderCard';

function MovieSlider({ slides }) {
    // {`/moviedetail/${slide.title.replaceAll(' ', '-').toLowerCase()}` + '_' + 'id:' + `search: ${slide.id}`}

    return (
        <div className='container mx-auto'>
            <h3 className='my-4 text-3xl font-bold dark:text-white'>Top 50</h3>
           <Swiper
                spaceBetween={20}
                slidesPerView={6}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <MovieSliderCard sliderCard={slide} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MovieSlider;