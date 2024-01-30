const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTFiMDZjZDQ2ZWFiYmYwZGFlMTA3ZDRmN2Q0NTE5ZSIsInN1YiI6IjY1YWE1NWMzOGQ1MmM5MDEzNzgxZGQyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nEuvsBbYJCezSz-NsVOhnmPGXxKswUuc2U6R12VioE'
    }
};

export const fetchMovies = () => {
    return fetch(`${process.env.REACT_APP_BASE_URL}/now_playing?language=en-US&page=1`, options);
}

export const fetchFavouritesMovies = () => {
    return fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1`, options);
}

export const fetchSearchedMovies = (searchValue) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`, options);
}