import { useContext } from "react";
import { GlobalContext } from "../../components/context/GlobalContextProvider";
// import { fetchFavouritesMovies } from "../../helpers/fetchData";
// import Banner from "../Banner/Banner";

export default function Favourites () {
    const {favourites} = useContext(GlobalContext);
    // console.log(favourites)

    return(
        <div className="container mx-auto columns-6 mt-4">
            {favourites.map(movie => 
                <div key={movie.id}>
                    <div className="aspect-h-2 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`${movie.title}`} className="object-cover object-center" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{`${movie.title}`}</h2>
                </div>
            )}
        </div>
    )
}