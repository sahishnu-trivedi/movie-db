import React, { useState } from "react";
import "./header.css";
import SearchBar from "../../components/SearchBar";
import Hamburger from "../../components/hamburger/Hamburger";
// import Nav from "../../components/navigation/Nav";

function Header() {
    return(
        <header className="position: fixed z-20 w-full left-0 top-0 py-5">
            <div className="container mx-auto">
                <div className="md:flex md:items-center md:justify-between">
                    <h1 className="logo-name text-4xl text-gold">Movie<span className="red-text">flix</span></h1>
                    <div className="md:flex md:items-center">
                        <SearchBar />
                        <Hamburger />
                    </div>
                    {/* <a href="#" className="hamburger-menu hamburger-cross absolute top-1/2 right-0" onClick={toggleMenuDisplay}>
                        <span className="hamburger-menu-line mb-1"></span>
                        <span className="hamburger-menu-line mb-1"></span>
                        <span className="hamburger-menu-line block"></span>
                    </a> */}
                    {/* <Nav />*/}
                </div>
            </div>
        </header>
    )
}

export default Header;