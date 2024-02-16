import Buttons from "./Buttons";

export default function SearchMovieCard ({ movieList }) {
    return (
        <div className="absolute z-10 left-0 w-96">
            {movieList && movieList.length > 0 && 
                movieList.map((movieListResult) => (
                    <div key={movieListResult.id}>
                        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-cover h-40 w-30 rounded-t-lg md:h-40 md:rounded-none md:rounded-s-lg" src={`https://image.tmdb.org/t/p/original/${movieListResult.poster_path}`} alt={`${movieListResult.title}`} />
                            <div className="flex flex-col justify-between p-3 leading-normal">
                                <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">{movieListResult.title}</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400 mb-3">{movieListResult.release_date}</span>
                                <Buttons name="Add to Favourites" bkgColor="#f00" color="#fff" />
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>
    )
}