import React from "react";
import "./header.css";
import NavListItem from "../components/NavListItem";
import navListData from "../data/NavListData";
import SearchBar from "../components/SearchBar";

function Header() {
    return(
        <div className="container mx-auto">
            <div className="md:flex md:items-center md:justify-between">
                <h1 className="logo-name">Movieflix</h1>
                <ul className="nav lg:flex lg:gap-x-3 ">
                    {
                        navListData.map(nav => (
                            <NavListItem key={nav._id} nav={nav} />
                        ))
                    }
                </ul>
                <SearchBar />
            </div>
        </div>
    )
}

export default Header;