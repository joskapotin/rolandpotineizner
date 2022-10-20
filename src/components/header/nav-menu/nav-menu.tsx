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
        }  fixed top-0 right-0 bottom-0 left-1/2 flex origin-top flex-col justify-center bg-gray-50 text-center transition-transform duration-300 ease-in-out sm:static sm:flex sm:flex-grow sm:translate-x-0 sm:flex-row sm:justify-between sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10`}
      >
        {NAV_MENU.map(item => (
          <li key={item.NAME}>
            <NavLink
              className={`${
                isOpen ? "opacity-100 delay-100" : "opacity-0"
              }  block  py-3 px-2 xl:py-5 transition-opacity  duration-300 ease-in-out sm:px-0 sm:opacity-100 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl relative sm:before:contents[""] sm:before:absolute sm:before:bg-gray-900 sm:before:rounded-t sm:before:transition-transform sm:before:scale-y-0 sm:before:duration-150 sm:before:ease-in-out hover:sm:before:scale-y-100 sm:before:origin-bottom sm:before:bottom-0 sm:before:left-0 sm:before:h-1/6 sm:before:right-0`}
              to={item.URL}
              onClick={toggleIsOpen}
              end={item.URL === ROUTES.HOME.URL || item.URL === ROUTES.PAINTINGS.URL}
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
