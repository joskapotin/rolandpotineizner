import { NavLink } from "react-router-dom"
import { NAV_MENU, ROUTES } from "../../../constants/constants"
import useToggle from "../../../hooks/useToggle"
import Burger from "./burger/burger"

function NavMenu() {
  const [isOpen, toggleIsOpen] = useToggle(false)

  return (
    <nav className="flex flex-col sm:flex-row">
      <Burger isOpen={isOpen} toggleIsOpen={toggleIsOpen} />

      <ul
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:gap:4 fixed top-0 right-0 bottom-0 left-1/2 flex origin-top flex-col justify-center bg-gray-50 text-center transition-transform duration-300 ease-in-out sm:static sm:flex sm:flex-grow sm:translate-x-0 sm:flex-row sm:justify-between sm:gap-2 lg:gap-6 xl:gap-8 2xl:gap-10`}
      >
        {NAV_MENU.map(item => (
          <li key={item.NAME}>
            <NavLink
              className={`${
                isOpen ? "opacity-100 delay-100" : "opacity-0"
              }  block  py-3 px-2 xl:py-5 transition-opacity  duration-300 ease-in-out sm:px-0 sm:opacity-100 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl relative md:before:contents[""] md:before:absolute md:before:bg-gray-900 md:before:rounded-t md:before:transition-transform md:before:scale-y-0 md:before:duration-150 md:before:ease-in-out hover:md:before:scale-y-100 md:before:origin-bottom md:before:bottom-0 md:before:left-0 md:before:h-1/6 md:before:right-0`}
              to={item.URL}
              onClick={toggleIsOpen}
              end={item.URL === ROUTES.HOME.URL || item.URL === ROUTES.WORKS.URL}
            >
              {item.NAME}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default NavMenu
