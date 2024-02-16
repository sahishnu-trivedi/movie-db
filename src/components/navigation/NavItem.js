import { NavLink, useParams } from "react-router-dom";

export default function NavItem({path, label}) {
  return (
    <li>
        <NavLink to={path} className={({ isActive }) => {
            return `text-m font-semibold leading-6 ${isActive ? 'text-red-500' : 'text-zinc-400'} `
          }}>{label}
        </NavLink>
    </li>
  )
}
