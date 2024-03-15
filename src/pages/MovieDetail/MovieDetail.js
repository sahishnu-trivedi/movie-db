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
                fullMovie && fullMovie.length > 0 &&
                <div className="flex justify-center w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                                <img src={`https://image.tmdb.org/t/p/original/${fullMovie.poster_path}`} alt={`${fullMovie.title}`} className="object-cover object-center" />
                            </div>
                            <div className="sm:col-span-8 lg:col-span-7">
                                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{`${fullMovie.title}`}</h2>

                                <section aria-labelledby="information-heading" className="mt-2">
                                    <p className="text-l text-gray-900">{`${fullMovie.overview}`}</p>

                                    <div className="mt-6">
                                        <h4 className="text-l font-bold text-gray-900 sm:pr-12">Release Date</h4>
                                        <p className="text-m text-gray-900">{`${fullMovie.release_date}`}</p>
                                    </div>

                                    <div className="flex items-center justify-between mt-6">
                                        <div>
                                            <h4 className="text-l font-bold text-gray-900 sm:pr-12">Vote Average</h4>
                                            <p className="text-m text-gray-900">{`${fullMovie.vote_average}`}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-l font-bold text-gray-900 sm:pr-12">Vote Count</h4>
                                            <p className="text-m text-gray-900">{`${fullMovie.vote_count}`}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-l font-bold text-gray-900 sm:pr-12">Popularity</h4>
                                            <p className="text-m text-gray-900">{`${fullMovie.popularity}`}</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}