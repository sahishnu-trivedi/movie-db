import React from "react";
import "./header.css";
import SearchBar from "../../components/SearchBar";
import Hamburger from "../../components/hamburger/Hamburger";
// import Nav from "../../components/navigation/Nav";

function Header() {
    return(
        <header className="position: fixed z-20 w-full left-0 top-0 py-5 header-main">
            <div className="container mx-auto">
                <div className="md:flex md:items-center md:justify-between">
                    <h1 className="logo-name text-4xl text-white">Movie<span className="text-primary-color">flix</span></h1>
                    <div className="md:flex md:items-center">
                        <SearchBar />
                        <Hamburger />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;