import React from "react";
import "./header.css";
import SearchBar from "../../components/SearchBar";
import { NavLink } from "react-router-dom";
import Nav from "../../components/navigation/Nav";

function Header() {
    return(
        <header>
            <div className="container mx-auto">
                <div className="md:flex md:items-center md:justify-between">
                    <h1 className="logo-name">Movieflix</h1>
                    <Nav />
                    {/* <ul className="nav lg:flex lg:gap-x-3 ">
                        {/* {
                            navListData.map(nav => (
                                <NavListItem key={nav._id} nav={nav} />
                            ))
                        } */}
                        {/* <li className="nav-list-item">
                            <NavLink to='/' className={(isActive) => `text-sm font-semibold leading-6 ${isActive ? 'text-red-500' : 'text-zinc-400'} `}>Home</NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink to='/favourites' className={({isActive}) => `text-sm font-semibold leading-6 ${isActive} ? 'text-red-500' : 'text-zinc-400'`}>Favourites</NavLink>
                        </li>
                        <li className="nav-list-item">
                            <NavLink to='/trending' className={({isActive}) => `text-sm font-semibold leading-6 ${isActive} ? 'text-red-500' : 'text-zinc-400'`}>Trending</NavLink>
                        </li> */}
                    <SearchBar />
                </div>
            </div>
        </header>
    )
}

export default Header;