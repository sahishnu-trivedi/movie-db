import { useContext } from "react"
import { GlobalContext } from "../../components/context/GlobalContextProvider"
import { useParams, useSearchParams } from "react-router-dom";
// import { useParams } from "react-routers-dom";

export default function MovieDetail() {
    const {allMovies} = useContext(GlobalContext);
    // console.log('allMovies : ', allMovies)

    const [query] = useSearchParams();

    const movieId = (query.get('id'))
    // console.log('movieId ', movieId)
    
    const filteredMovie = allMovies.find((movie) => {
        // console.log('movie: ', movie);
        // console.log('Comparing:', movie.id, '===', movieId);
        // console.log('typeof movieId : ', typeof(movieId))
        // console.log('typeof movie.id : ', typeof(movie.id.toString()))
        return movie.id == movieId
    })
    // console.log(filteredMovie.title)
    
    return(
        <div className="flex justify-center">
            <div className="flex justify-center w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                
                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                        <img src={`https://image.tmdb.org/t/p/original/${filteredMovie.poster_path}`} alt={`${filteredMovie.title}`} className="object-cover object-center" />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{`${filteredMovie.title}`}</h2>

                        <section aria-labelledby="information-heading" className="mt-2">
                            <p className="text-l text-gray-900">{`${filteredMovie.overview}`}</p>

                            <div className="mt-6">
                                <h4 className="text-l font-bold text-gray-900 sm:pr-12">Release Date</h4>
                                <p className="text-m text-gray-900">{`${filteredMovie.release_date}`}</p>
                            </div>

                            <div className="flex items-center justify-between mt-6">
                                <div>
                                    <h4 className="text-l font-bold text-gray-900 sm:pr-12">Vote Average</h4>
                                    <p className="text-m text-gray-900">{`${filteredMovie.vote_average}`}</p>
                                </div>
                                <div>
                                    <h4 className="text-l font-bold text-gray-900 sm:pr-12">Vote Count</h4>
                                    <p className="text-m text-gray-900">{`${filteredMovie.vote_count}`}</p>
                                </div>
                                <div>
                                    <h4 className="text-l font-bold text-gray-900 sm:pr-12">Popularity</h4>
                                    <p className="text-m text-gray-900">{`${filteredMovie.popularity}`}</p>
                                </div>
                            </div>
                        </section>

                        {/* <section aria-labelledby="options-heading" className="mt-10">
                            <h4 className="text-m font-medium text-gray-900">Genre</h4>
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm font-medium text-gray-900">{`${filteredMovie.genre_ids[0]}`}</h4>
                                {/* <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a> */}
                            </div>
                            {/* <form>
                                <button type="submit" className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
                            </form> }
                        </section> */}
                    {/* </div> */}
                </div>
                </div>
            </div>
        </div>
    )
}