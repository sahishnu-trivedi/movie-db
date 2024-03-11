import React, { useState } from "react";
import SearchMovieCard from "./SearchMovieCard";
import { fetchSearchedMovies } from "../helpers/fetchData";

// import { fetchSearchedMovies } from "./FetchData";

function SearchBar(){
    const [searchMovie, setSearchMovie] = useState('');
    const [searchMovieResult, setSearchMovieResult] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const handleChange = async (e) => {
        setSearchMovie(e.target.value)

        await fetchSearchedMovies(e.target.value).then(res => res.json())
        .then(data => setSearchMovieResult(data.results))
        .catch(err => console.log(err));
    }

    return(
      <div className="relative flex" data-headlessui-state="open">
        <button className="mr-3 ease-linear transition-all duration-150 search-icon" type="button" onClick={() => setShowModal(true)}>
          <ion-icon name="search-outline"></ion-icon>
        </button>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-1/2">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold"> Search Movie </h3>
                    <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <input className="block w-full appearance-none bg-transparent py-3 pl-3 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6 border border-gray-600 rounded-lg" placeholder="Search Movie Here..."  value={searchMovie} onChange={handleChange} />
                    {searchMovie && searchMovie.length > 0 &&
                      <SearchMovieCard movieList={searchMovieResult} />
                    }
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-60 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(true)}></div>
          </>
        ) : null}
      </div>
    );
}

export default SearchBar;