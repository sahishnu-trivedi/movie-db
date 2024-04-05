import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../components/context/GlobalContextProvider"
import { useParams, useSearchParams } from "react-router-dom";
import { fetchMovieDetail } from "../../helpers/fetchData";
// import { useParams } from "react-routers-dom";

export default function MovieDetail() {
    // const {allMovies} = useContext(GlobalContext);
    const [fullMovie, setFullMovie] = useState([]);
    // console.log('allMovies : ', allMovies)

    const movieDetail = async(id) => {
        return await fetchMovieDetail(id).then(res => res.json())
        .then(data => setFullMovie(data))
        .catch(err => console.log(err));
    }

    const [query] = useSearchParams();

    const movieId = Number(query.get('id'))
    // console.log('movieId ', movieId)
    
    useEffect(() => {
        movieDetail(movieId);
        console.log(fullMovie)
    }, [])

    // const filteredMovie = allMovies.find((movie) => {
    //     // console.log('movie: ', movie);
    //     // console.log('Comparing:', movie.id, '===', movieId);
    //     // console.log('typeof movieId : ', typeof(movieId))
    //     // console.log('typeof movie.id : ', typeof(movie.id.toString()))
    //     return movie.id == movieId
    // })
    // console.log(filteredMovie.title)
    
    return(
        <div className="flex justify-center">
            {
                fullMovie && 
                <div className="grid grid-cols-2">
                    <div className="overflow-hidden h-screen movie-detail-overlay relative">
                        <img src={`https://image.tmdb.org/t/p/original/${fullMovie.poster_path}`} alt={`${fullMovie.title}`} className="object-contain object-center" />
                    </div>
                    <div className="transform text-left text-base transition md:p-7 z-40 flex justify-center items-center detail-text-body">
                        <div className="grid w-full grid-cols-1 flex justify-center w-full md:max-w-2xl lg:max-w-3xl">
                            <h2 className="md:text-7xl font-bold uppercase text-gray-900 sm:pr-12 text-primary-color">{`${fullMovie.title}`}</h2>
                            <section aria-labelledby="information-heading" className="mt-2">
                                <p className="text-l text-gray-900 text-tertiary-color ">{`${fullMovie.overview}`}</p>

                                <div className="mt-6 flex items-center justify-between">
                                    <div>
                                        <h4 className="text-l font-bold text-gray-900 sm:pr-12 text-primary-color">Release Date</h4>
                                        <p className="text-m text-gray-900 text-tertiary-color">{`${fullMovie.release_date}`}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-l font-bold text-gray-900 sm:pr-12 text-primary-color">Produced By</h4>
                                        <p className="text-m text-gray-900 text-tertiary-color">{
                                            fullMovie.genres &&
                                            fullMovie.genres.map(genre => (
                                                genre.name + ', '
                                            )) 
                                        }</p>
                                    </div>
                                    <div>
                                        <h4 className="text-l font-bold text-gray-900 sm:pr-12 text-primary-color">Production Companies</h4>
                                        <p className="text-m text-gray-900 text-tertiary-color">{
                                           fullMovie.production_companies &&
                                           fullMovie.production_companies.map(produce => (
                                            produce.name + ', '
                                           )) 
                                        }</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-6">
                                    <div>
                                        <h4 className="text-l font-bold text-gray-900 sm:pr-12 text-primary-color">Vote Average</h4>
                                        <p className="text-m text-gray-900 text-tertiary-color">{Math.round(`${fullMovie.vote_average}`)}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-l font-bold text-gray-900 sm:pr-12 text-primary-color">Runtime</h4>
                                        <p className="text-m text-gray-900 text-tertiary-color">{`${fullMovie.runtime}`} mins</p>
                                    </div>
                                    <div>
                                        <h4 className="text-l font-bold text-gray-900 sm:pr-12 text-primary-color">Status</h4>
                                        <p className="text-m text-gray-900 text-tertiary-color">{`${fullMovie.status}`}</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}