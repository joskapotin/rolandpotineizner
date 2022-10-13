import { NavLink } from "react-router-dom"
import { ROUTES } from "../../constants/constants"
import NavMenu from "./nav-menu/nav-menu"

function Header() {
  return (
    <header className="z-10 flex items-baseline justify-between px-2 pt-2">
      <NavLink to={ROUTES.HOME} className="font-daniel text-xl">
        Roland <span className="font-danielbd font-bold">Potin</span> Eizner
      </NavLink>
      <NavMenu />
    </header>
  )
}

export default Header
