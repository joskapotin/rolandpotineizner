import { NavLink } from "react-router-dom"
import { ROUTES } from "../../constants/constants"
import NavMenu from "./nav-menu/nav-menu"

function Header() {
  return (
    <header className="container sticky top-0 z-10 flex items-center justify-between gap-6 px-2 mx-auto border-b shadow sm:py-5 md:py-10 border-b-gray-900 bg-gray-50 sm:relative sm:border-none sm:px-0 sm:shadow-none">
      <NavLink
        to={ROUTES.HOME.URL}
        className="flex-shrink-0 pt-2 text-2xl font-daniel sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
      >
        Roland <span className="font-bold font-danielbd">Potin</span> Eizner
      </NavLink>
      <NavMenu />
    </header>
  )
}

export default Header
