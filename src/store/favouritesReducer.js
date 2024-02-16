const ADD_ALL_MOVIES = 'addAllMovies';
const ADD_MOVIES_TO_FAVOURITES = 'addMoviesToFavourites';

const favouritesreducer = (state, action) => {
    switch(action.type){
        case 'ADD_ALL_MOVIES': 
            return{
                ...state,
                allMovies: action.payload
            };
        case 'ADD_MOVIES_TO_FAVOURITES': 
            action.payload.addedToFavourites = true;
            return{
                ...state,
                favourites: [action.payload, ...state.favourites]
            };
        default:
            return state;
    }
}

export default favouritesreducer