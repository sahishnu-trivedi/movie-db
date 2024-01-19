import React from "react";

function FetchData() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTFiMDZjZDQ2ZWFiYmYwZGFlMTA3ZDRmN2Q0NTE5ZSIsInN1YiI6IjY1YWE1NWMzOGQ1MmM5MDEzNzgxZGQyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nEuvsBbYJCezSz-NsVOhnmPGXxKswUuc2U6R12VioE'
        }
    };

    const fetchMovies = () => {
        const movieListFetch = fetch('https://api.themoviedb.org/3/authentication', options)
        .then(res => res.json())
        .then(movie => console.log(movie))
        .catch(err => console.error(err));
    }
}

export default FetchData;