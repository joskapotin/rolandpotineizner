import { NavLink } from "react-router-dom"
import { ROUTES } from "../../constants/constants"
import NavMenu from "./nav-menu/nav-menu"

function Header() {
  return (
    <header className="container sticky top-0 z-10 mx-auto flex items-center justify-between gap-6 border-b border-b-gray-900 bg-gray-50 px-2 shadow sm:relative sm:top-auto sm:items-baseline sm:border-none sm:px-0 sm:shadow-none">
      <NavLink
        to={ROUTES.HOME.URL}
        className="w-full pt-2 font-daniel text-2xl sm:mt-4 sm:pt-0 sm:text-3xl md:mt-6 md:text-4xl lg:mt-8 lg:text-5xl xl:mt-10 xl:text-6xl 2xl:mt-12 2xl:text-7xl"
      >
        Roland <span className="font-danielbd font-bold">Potin</span> Eizner
      </NavLink>
      <NavMenu />
    </header>
  )
}

export default Header
