import Buttons from "../../components/Buttons";

function Banner({ content }) {
    return(
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 banner-overlay">
            <div>
                <img src={`https://image.tmdb.org/t/p/original/${content[0].poster_path}`} alt={`${content[0].title}`} style={{zIndex: -10}} className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/>
                <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
                </div>
                <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 banner-text">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{content[0].title}</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">{content[0].overview}</p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">Year Released</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{content[0].release_date}</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">Popularity</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{content[0].popularity}</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">Movie Genre</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{content[0].genre_ids[0]}</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">Movie Category</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{content[0].genre_ids[1]}</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="mt-3">
                        <Buttons name='Add to Favourites' />
                        <Buttons name='Info' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;