// Import Swiper React components
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

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
                    <SwiperSlide>
                        <img className='transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0' key={slide.id} src={`https://image.tmdb.org/t/p/w500/${slide.poster_path}`} alt={slide.original_title} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MovieSlider;