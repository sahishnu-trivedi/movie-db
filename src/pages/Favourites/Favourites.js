import { useState, useEffect } from "react";
import { fetchFavouritesMovies } from "../../components/FetchData";
// import Banner from "../Banner/Banner";

export default function Favourites () {
    // const [favMovies, setFavMovies] = useState([]);

    const resultFavMovie = async () => {
        return await fetchFavouritesMovies().then(res => res.json())
        .then(success => console.log(success))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        resultFavMovie();
    });

    return(
        <div>
            Favourite Movies
        </div>
    )
}