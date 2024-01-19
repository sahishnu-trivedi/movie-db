import React from "react";
import "./navlistItem.css"

function NavListItem({ nav }) {
    return(
        <li className="nav-list-item"><a href={nav.link}>{nav.name}</a></li>
    )
}

export default NavListItem;