import { NavLink } from "react-router-dom"
import { NAV_MENU } from "../../../constants/constants"
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
          <li key={item.URL}>
            <NavLink
              className={`${
                isOpen ? "opacity-100 delay-100" : "opacity-0"
              } block  py-3 px-2 transition-opacity  duration-300 ease-in-out sm:px-0 sm:opacity-100 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl`}
              to={item.URL}
              onClick={toggleIsOpen}
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
