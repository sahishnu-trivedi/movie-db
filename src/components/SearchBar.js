import React, { useState } from "react";
import SearchMovieCard from "./SearchMovieCard";
import { fetchSearchedMovies } from "../helpers/fetchData";

// import { fetchSearchedMovies } from "./FetchData";

function SearchBar(){
    const [searchMovie, setSearchMovie] = useState('');
    const [searchMovieResult, setSearchMovieResult] = useState([]);
    const [showModal, setShowModal] = React.useState(false);
    const handleChange = async (e) => {
        setSearchMovie(e.target.value)

        await fetchSearchedMovies(e.target.value).then(res => res.json())
        .then(data => setSearchMovieResult(data.results))
        .catch(err => console.log(err));
    }

    return(
      <div className="relative flex" data-headlessui-state="open">
        <button className="mr-3 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(true)}>
          <svg className="pointer-events-none h-6 w-6 fill-slate-400" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
          </svg>
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