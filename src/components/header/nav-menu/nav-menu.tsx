import { NavLink } from "react-router-dom"
import { NAV_MENU } from "../../../constants/constants"
import useToggle from "../../../hooks/useToggle"
import Hamburger from "./hamburger/hamburger"

function NavMenu() {
  const [isOpen, toggleIsOpen] = useToggle(false)

  return (
    <nav className="flex flex-col">
      <Hamburger isOpen={isOpen} toggleIsOpen={toggleIsOpen} />

      <ul
        className={`${
          isOpen ? "scale-y-100" : "scale-y-0"
        } xl:gap-13 absolute inset-x-0 top-11 flex origin-top flex-col justify-center bg-gray-50 text-center transition-transform duration-300 ease-in-out sm:static sm:flex sm:flex-grow sm:scale-y-100 sm:flex-row sm:gap-4 md:gap-7 lg:gap-10 2xl:gap-16`}
      >
        {NAV_MENU.map(item => (
          <li key={item.URL}>
            <NavLink
              className={`${
                isOpen ? "opacity-100" : "opacity-0"
              } block transition-opacity duration-300 ease-in-out sm:opacity-100 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl`}
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
