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
          isOpen ? "visible scale-y-100" : "invisible scale-y-0"
        } absolute inset-x-0 top-11 flex flex-grow origin-top flex-col justify-center bg-gray-50 text-center transition-transform duration-300 ease-in-out sm:visible sm:static sm:flex sm:scale-y-100 sm:flex-row sm:gap-2`}
      >
        {NAV_MENU.map(item => (
          <li key={item.URL}>
            <NavLink className="block" to={item.URL} onClick={toggleIsOpen}>
              {item.NAME}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default NavMenu
