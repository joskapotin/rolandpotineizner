import { NavLink } from "react-router-dom"
import { ROUTES } from "../../constants/constants"

function Header() {
  return (
    <div>
      <ul className="flex">
        <li>
          <NavLink to={ROUTES.HOME}>Home</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.ABOUT}>About</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.WORK}>Work</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
