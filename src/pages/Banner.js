import React from "react";
import Buttons from "../components/Buttons";

function Banner() {
    return(
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" style={{zIndex: -10}}/>
            <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
            </div>
            <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Movie Title</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">Movie Detail</p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        <a href="#">Year Released <span aria-hidden="true">&rarr;</span></a>
                        <a href="#">Movie Length <span aria-hidden="true">&rarr;</span></a>
                        <a href="#">Movie Genre <span aria-hidden="true">&rarr;</span></a>
                        <a href="#">Movie Category <span aria-hidden="true">&rarr;</span></a>
                    </div> */}
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-300">Year Released</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">2012</dd>
                        </div>
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-300">Movie Length</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">1:52:36</dd>
                        </div>
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-300">Movie Genre</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">Action</dd>
                        </div>
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-300">Movie Category</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">Comedy</dd>
                        </div>
                    </dl>
                </div>
                <div className="mt-3">
                    <Buttons name='Add to Favourites' />
                    <Buttons name='Info' />
                </div>
            </div>
        </div>
    );
}

export default Banner;