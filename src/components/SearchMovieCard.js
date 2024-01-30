export default function SearchMovieCard ({ movieList }) {
    return (
        <div>
            {movieList && movieList.length > 0 && 
                movieList.map((movieListResult) => (
                    <div key={movieListResult.id}>
                        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img class="object-cover h-20 w-20 rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg" src={`https://image.tmdb.org/t/p/original/${movieListResult.poster_path}`} alt={`${movieListResult.title}`} />
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{movieListResult.title}</h5>
                                <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">{movieListResult.overview}</p>
                                <span class="text-sm text-gray-500 dark:text-gray-400">{movieListResult.release_date}</span>
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>
    )
}