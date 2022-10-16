import { NavLink } from "react-router-dom"
import { ROUTES } from "../../constants/constants"
import NavMenu from "./nav-menu/nav-menu"

function Header() {
  return (
    <header className="container z-10 mx-auto flex items-baseline justify-between px-2 pt-2 sm:px-0">
      <NavLink
        to={ROUTES.HOME.URL}
        className="font-daniel text-2xl leading-normal sm:text-3xl md:mt-2 md:text-4xl lg:mt-3 lg:text-5xl xl:mt-4 xl:text-6xl 2xl:mt-5 2xl:text-7xl"
      >
        Roland <span className="font-danielbd font-bold">Potin</span> Eizner
      </NavLink>
      <NavMenu />
    </header>
  )
}

export default Header
