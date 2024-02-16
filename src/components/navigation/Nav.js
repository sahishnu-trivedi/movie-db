import React from "react";
import "./navlistItem.css"
import { NAV_LINKS } from "../../constants/constants";
import NavItem from "./NavItem";

function Nav() {
    return(
        <ul className="nav lg:flex lg:gap-x-3">
            {NAV_LINKS.map(link => (
                <NavItem key={link.id} label={link.label} path={link.path}/>
            ))}
        </ul>
    )
}

export default Nav;