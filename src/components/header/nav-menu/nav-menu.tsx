import { NavLink } from "react-router-dom"
import { ROUTES } from "../../../constants/constants"
import useToggle from "../../../hooks/useToggle"
import Hamburger from "../../hamburger/hamburger"

function NavMenu() {
  const [isOpen, toggleIsOpen] = useToggle(false)

  // TODO: responsive menu

  return (
    <nav className="relative flex flex-col">
      <Hamburger isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
      <ul
        className={`fixed inset-0 flex flex-grow flex-col justify-center bg-gray-50 text-center sm:static ${
          isOpen === false && "hidden"
        }`}
      >
        <li>
          <NavLink className="block sm:hidden" to={ROUTES.HOME} onClick={toggleIsOpen}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="block" to={ROUTES.ABOUT} onClick={toggleIsOpen}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="block" to={ROUTES.WORKS} onClick={toggleIsOpen}>
            Works
          </NavLink>
        </li>
        <li>
          <NavLink className="block" to={ROUTES.TOOLS} onClick={toggleIsOpen}>
            Tools
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default NavMenu
