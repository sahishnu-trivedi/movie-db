import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../components/context/GlobalContextProvider";
// import { fetchFavouritesMovies } from "../../helpers/fetchData";
// import Banner from "../Banner/Banner";

export default function Favourites () {
    const {favourites} = useContext(GlobalContext);

    // const resultFavMovie = async () => {
    //     return await fetchFavouritesMovies().then(res => res.json())
    //     .then(success => console.log(success))
    //     .catch(err => console.log(err))
    // }

    // useEffect(() => {
    //     // resultFavMovie();
    // });

    return(
        <div>
            {/* {favourites.find(movie => movie.id == )} */}
            {favourites.map(movie => <div key={movie.id}>{movie.title}</div>)}
        </div>
    )
}