import { createContext, useReducer, useState } from "react"
import favouritesreducer from "../../store/favouritesReducer";


// Initial State
const initialState = {
  allMovies: [],
  favourites: []
}

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = (props) => {
    const [state, dispatch] = useReducer(favouritesreducer, initialState)

    const addAllMovies = (movies) => {
      dispatch({type: "ADD_ALL_MOVIES", payload: movies});
    }

    const addMovieToFavourites = (movie) => {
      dispatch({type: "ADD_MOVIES_TO_FAVOURITES", payload: movie});
    }

    return (
      <GlobalContext.Provider value={{ favourites: state.favourites, allMovies: state.allMovies,  addMovieToFavourites, addAllMovies}}>
          {props.children}
      </GlobalContext.Provider>
    )
}



// {
//   "adult": false,
//   "backdrop_path": "/pWsD91G2R1Da3AKM3ymr3UoIfRb.jpg",
//   "genre_ids": [
//       878,
//       28,
//       18
//   ],
//   "id": 933131,
//   "original_language": "ko",
//   "original_title": "황야",
//   "overview": "After a deadly earthquake turns Seoul into a lawless badland, a fearless huntsman springs into action to rescue a teenager abducted by a mad doctor.",
//   "popularity": 1907.07,
//   "poster_path": "/zVMyvNowgbsBAL6O6esWfRpAcOb.jpg",
//   "release_date": "2024-01-26",
//   "title": "Badland Hunters",
//   "video": false,
//   "vote_average": 6.726,
//   "vote_count": 382
// }