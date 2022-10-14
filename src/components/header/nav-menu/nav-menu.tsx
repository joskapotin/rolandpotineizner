import { NavLink } from "react-router-dom"
import { ROUTES } from "../../../constants/constants"
import useToggle from "../../../hooks/useToggle"
import Hamburger from "./hamburger/hamburger"

function NavMenu() {
  const [isOpen, toggleIsOpen] = useToggle(false)

  return (
    <nav className="relative flex flex-col">
      <Hamburger isOpen={isOpen} toggleIsOpen={toggleIsOpen} />

      <ul
        className={`${
          isOpen ? "visible" : "invisible"
        } fixed inset-0 flex flex-grow flex-col justify-center bg-gray-50 text-center sm:visible sm:static sm:flex-row sm:gap-2`}
      >
        <li>
          <NavLink className="block" to={ROUTES.HOME.URL} onClick={toggleIsOpen}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="block" to={ROUTES.ABOUT.URL} onClick={toggleIsOpen}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="block" to={ROUTES.WORKS.URL} onClick={toggleIsOpen}>
            Works
          </NavLink>
        </li>
        <li>
          <NavLink className="block" to={ROUTES.TOOLS.URL} onClick={toggleIsOpen}>
            Tools
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default NavMenu
