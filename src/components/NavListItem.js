import React from "react";
import "./navlistItem.css"
import { Link } from "react-router-dom";

function NavListItem() {
    return(
        <li className="nav-list-item">
            <Link to='/'>Home</Link>
            <Link to='/favourites'>Favourites</Link>
            <Link to='/trending'>Trending</Link>
        </li>
    )
}

export default NavListItem;