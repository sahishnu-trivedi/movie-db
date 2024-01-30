import React, { useEffect, useState } from "react";
import SearchMovieCard from "./SearchMovieCard";
import { fetchSearchedMovies } from "./FetchData";
// import { fetchSearchedMovies } from "./FetchData";

function SearchBar(){
    const [searchMovie, setSearchMovie] = useState('');
    const [searchMovieResult, setSearchMovieResult] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTFiMDZjZDQ2ZWFiYmYwZGFlMTA3ZDRmN2Q0NTE5ZSIsInN1YiI6IjY1YWE1NWMzOGQ1MmM5MDEzNzgxZGQyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nEuvsBbYJCezSz-NsVOhnmPGXxKswUuc2U6R12VioE'
        }
    };

    const handleChange = async (e) => {
        setSearchMovie(e.target.value)

        await fetchSearchedMovies(e.target.value).then(res => res.json())
        .then(data => setSearchMovieResult(data.results))
        .catch(err => console.log(err));
    }

    console.log(searchMovieResult);

    // useEffect(() => {
    //     console.log(fetchMovieResult);
    // }, []);

    return(
        <div className="overflow-hidden rounded-lg bg-white shadow-md" data-headlessui-state="open">
            <div className="relative">
                <input className="block w-full appearance-none bg-transparent py-3 pl-3 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6 border border-gray-600" 
                    placeholder="Find anything..." 
                    value={searchMovie}
                    onChange={handleChange}
                />
                <svg className="pointer-events-none absolute right-4 top-4 h-6 w-6 fill-slate-400" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
                </svg>
            </div>
            <SearchMovieCard movieList={searchMovieResult} />
        </div>
    );
}

export default SearchBar;