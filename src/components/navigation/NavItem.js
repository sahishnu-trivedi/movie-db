import { NavLink, useParams } from "react-router-dom";

export default function NavItem({path, label}) {
  return (
    <li className="nav-item mb-4">
        <NavLink to={path} className={({ isActive }) => {
            return `text-7xl font-extrabold uppercase ${isActive ? 'nav-item-active' : 'nav-item-inactive'} `
          }}>{label}
        </NavLink>
    </li>
  )
}
